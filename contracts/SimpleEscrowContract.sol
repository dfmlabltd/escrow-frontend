// SPDX-License-Identifier: UNLICENSED

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";
import "./SimpleEscrowManager.sol";

pragma solidity ^0.8.3;

contract SimpleEscrowContract {
    /*  *************************** STATE DEFINITION  ********************************  */

    /**
     * @notice counts withdrawal request nonce
     */

    uint256 private _nonce;

    /**
     * @notice stores the maximum amount that can be deposited
     */

    uint256 private _amount;

    /**
     * @notice stores the maximum amount that has been deposited so far
     * @dev
     */

    uint256 private _deposited_amount;

    /**
     * @notice stores the balance of left in the contract and data pertaining
     */

    uint256 private _balance;

    /**
     * @notice stores the contract address of the token/currency to be used for transactions
     * @dev _token.decimals() should be accessible. Beware of insecure contracts!
     */

    IERC20 private _token;

    /**
     * @notice stores the address of the depositor.
     * @dev only this address should be allowed to fund the contract, raise dispute etc.
     */

    address private _depositor;

    /**
     * @notice stores the address of the beneficiary
     * @dev only this address should be allowed to withdraw from the contract, raise dispute etc.
     */

    address private _beneficiary;

    /**
     * @notice stores the address of the manager
     * The manager is responsible for creating new contract, creating emmergency stop etc.
     * @dev only this address should be allowed to withdraw from the contract, raise dispute etc.
     */

    SimpleEscrowManager private _manager;

    /**
     * @notice this state variable stores all withdrawal requests
     **/

    mapping(bytes32 => bool) public _requests;

    /*  *************************** END OF STATE DEFINITION  ********************************  */

    /*  *************************** MODIFIER  ********************************  */

    /**
     * @notice this modifier is used to check if user is a depositor
     **/

    modifier isDepositor() {
        require(
            msg.sender == _depositor,
            "address does not belong to a depositor"
        );
        _;
    }

    /**
     * @notice this modifier is used to check if user is a beneficiary
     **/

    modifier isBeneficiary() {
        require(
            msg.sender == _beneficiary,
            "address does not belong to a beneficiary"
        );
        _;
    }

    /**
     * @notice this modifier is used to check if amount is a zero
     * @param amount the amount to check
     **/

    modifier isNonZeroAmount(uint256 amount) {
        require(amount > 0, "amount must be greater than 0");
        _;
    }

    /**
     * @notice check if contract has enough balance
     * @param amount the amount to check
     **/

    modifier canDeposit(uint256 amount) {
        require(
            _amount >= (_deposited_amount + amount),
            "deposited amount must be greater than max allowed total deposit"
        );
        _;
    }

    /**
     * @notice check if contract has enough balance
     * @param amount the amount to check
     **/

    modifier isEnoughBalance(uint256 amount) {
        require(_balance > amount, "balance must be greater than amount");
        _;
    }

    /**
     * @notice this modifier is used to check if nonce is valid
     * @dev this is useful to prevent replay attack
     * @param nonce the nonce to check
     **/

    modifier isValidNonce(uint256 nonce) {
        require(nonce >= _nonce, "invalid nonce");
        _;
    }

    /*  *************************** END OF MODIFIER  ********************************  */

    // this will run when you deploy the contract

    // adds contract checking functionality to the address
    using Address for address;

    // adds signing feature to bytes32
    using ECDSA for bytes32;

    /**
     * @notice the constructor will initialize import states in the contracts.
     * @param amount the maximum amount that can be deposited into the contract
     * @param depositor the address to authorize transactions
     * @param beneficiary the beneficiary adddress will be the recepient of the fund
     * @param manager the manager controls the smart contract
     * @param nonce the nonce to check
     **/
    constructor(
        uint256 amount,
        address token,
        address depositor,
        address beneficiary,
        address manager,
    ) {
        _setAmount(amount);
        _setToken(token);
        _setDepositor(depositor);
        _setBeneficiary(beneficiary);
        _setManager(manager);
    }

    /**
     * @notice this method is  used in setting the amount
     * @param amount the amount to set
     **/

    function _setAmount(uint256 amount) internal {
        require(amount > 0, "amount must be greater than 0");
        _amount = amount;
    }

    /**
     * @notice this method is  used in setting the token
     * @param token the token should be a valid erc20 token
     **/

    function _setToken(address token) internal {
        require(token.isContract(), "token address is not a contract");
        _token = IERC20(token);
    }

    /**
     * @notice this method is  used in setting the depositor
     * @param depositor the address to send token from
     **/

    function _setDepositor(address depositor) internal {
        require(
            depositor != address(0),
            "depositor should not be a zero address"
        );
        _depositor = depositor;
    }

    /**
     * @notice this method is  used in setting the beneficiary
     * @param depositor the address to claim the token
     **/

    function _setBeneficiary(address beneficiary) internal {
        require(
            beneficiary != address(0),
            "beneficiary should not be a zero address"
        );
        _beneficiary = beneficiary;
    }

    /**
     * @notice this method sets the manager (controller) of the contract
     * @param manager the address of the manager
     **/

    function _setManager(address manager) internal {
        require(manager.isContract(), "manager address is not a contract");
        _manager = SimpleEscrowManager(manager);
    }

    function deposit(uint256 amount)
        internal
        isDepositor
        isNonZeroAmount(amount)
        canDeposit(amount)
    {
        _deposit(amount);
        _incrementBalance(amount);
        _incrementDepositAmount(amount);

        // TODO: notify the manager of a deposit...
        emit Deposit(address(this), msg.sender, amount);
    }

    /**
     * @notice this is an helper method for deposit()
     * @dev to avoid need for double approval this function first use transferFrom the transfer
     * @param amount the amount to deduct from the user account
     **/
    function _deposit(uint256 amount) private {
        uint256 fee = ((amount * _manager.getFee()) / 100);
        _token.transferFrom(msg.sender, address(this), amount + fee);
        _token.transfer(_manager, fee);
    }

    // TODO: refactor all code and add comment
    // TODO: allow DLS to withdraw
    // TODO: setup mananger
    // TODO: add event handlers

    function getRequestHash(uint256 amount, uint256 nonce)
        internal
        view
        isBeneficiary
        isNonZeroAmount(amount)
        isValidNonce(nonce)
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(address(this), amount, nonce));
    }

    function acceptWithdrawalRequest(
        uint256 amount,
        uint256 nonce,
        bytes memory signature,
        bytes32 requestHash
    ) internal isDepositor isNonZeroAmount(amount) isEnoughBalance(amount) {
        bytes32 _requestHash = getRequestHash(amount, nonce);
        require(requestHash == _requestHash, "invalid request hash");
        require(_checkSignature(requestHash, signature), "unknown signature");
        require(!_requests[requestHash], "transaction already executed");

        _withdraw(amount);

        _requests[requestHash] = true;

        _incrementNonce();

        // TODO: send withdrawal event to the manager...
        emit Withdrawal(address(this), _beneficiary, msg.sender, amount);
    }

    function _withdraw(uint256 amount) private {
        _token.transfer(_beneficiary, amount);
        _decrementBalance(amount);
    }

    function _checkSignature(bytes32 requestHash, bytes memory signature)
        private
        view
        returns (bool)
    {
        bytes32 signedRequestHash = requestHash.toEthSignedMessageHash();
        address signer = signedRequestHash.recover(signature);
        require(signer == _beneficiary, "invalid signature");

        return true;
    }

    function getBalance() internal view returns (uint256) {
        return _balance;
    }

    function getToken() internal view returns (IERC20) {
        return _token;
    }

    function _incrementBalance(uint256 amount) private {
        _balance += amount;
    }

    function _decrementBalance(uint256 amount) private {
        _balance -= amount;
    }

    function _incrementDepositAmount(uint256 amount) private {
        _deposited_amount = amount;
    }

    function _incrementNonce() private {
        _nonce++;
    }
}
