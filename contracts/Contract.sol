//SPDX-License-Identifier: UNLICENSED
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (Contract.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ContractManager.sol";

pragma solidity ^0.8.4;

contract Contract {
    /***************************************************** STRUCT AND ENUM ************************************************************************* */
    struct Trustee {
        uint256 amount;
        uint256 balance;
        address wallet;
    }

    struct Depositor {
        uint256 amount;
        uint256 balance;
        uint256 deposited;
        address wallet;
    }

    struct Deposit {
        uint256 amount;
        address wallet;
    }

    enum WithdrawalStatus {
        INVALID,
        PENDING,
        REJECTED,
        APPROVED,
        COMPLETED
    }

    struct WithdrawalRequestVote {
        address wallet;
        uint256 points;
    }

    struct WithdrawalRequest {
        uint256 amount;
        address wallet;
        string description; // stored on IPFS
        uint256 points; // total approval points
        WithdrawalRequestVote[] votes;
        WithdrawalStatus status;
    }

    /***************************************************** STRUCT AND ENUM END ************************************************************************* */

    /************************************************************** MAPPING *************************************************************************** */

    /**
     * @notice stores the information and data pertaining
     * to depositors (contract funders)
     * responsible for making approval
     * a depositor can approve transaction
     * @dev a mapping of depositors address to Entity
     * showing how much each depositor has deposited vs
     * how much more they can approve
     */

    mapping(address => Depositor) public _depositors;

    /* @notice stores the information and data pertaining
     * to deposits that has been made into a contract
     * @dev a mapping of depositors address to Entity
     * showing how much each depositor has deposited vs
     * how much more they can approve
     */

    mapping(uint256 => Deposit) public _deposits;

    /**
     * @notice stores total number of depositers
     **/

    uint256 public _depositorsCount;

    /**
     * @notice stores total number of deposit
     **/

    uint256 public _depositCount;

    /**
     * @notice stores the information and data pertaining
     * to trustees (addresses with withdrawal permission)
     * responsible for making a withdrawal request
     * @dev a mapping of trustees address to Entity
     * showing how much each trustee can withdraw vs
     * how much they have withdrawn
     **/

    mapping(address => Trustee) public _trustees;

    /**
     * @notice all transactions will be carried using the
     * ERC20 token specified in the _currency field
     * @dev currency for all transactions
     **/

    /**
     * @notice this state variable stores all withdrawal requests
     **/

    mapping(uint256 => WithdrawalRequest) public _requests;

    /************************************************************** MAPPING END *************************************************************************** */

    /************************************************************** STATE *************************************************************************** */

    IERC20 immutable _currency;

    /**
     * @notice the manager contract is responsible for
     * logging events and creating a contract
     * @dev manager for all contracts
     **/

    ContractManager immutable _manager;

    /**
     * @notice this state variable stores the amount of token
     * left in the contract in wei
     * @dev compatible with non 18 decimals token
     **/

    uint256 private _balance;

    /**
     * @notice this state variable stores the total number of
     * withdrawal requests made so far
     **/

    uint256 _withdrawalCount;

    /**
     * @notice the number of days you have to wait before a
     * dispute decision is made
     **/

    uint256 _disputeWaitDay;

    /**
     * @notice the maximum total amount in a contract
     **/

    uint256 _targetAmount;

    /**
     * @notice automatically approve transactions
     * no need for vote
     **/

    bool _autoApprove;

    /************************************************************** STATE END *************************************************************************** */

    /**
     @dev The constructor should be called only by a manager contract
    * @param trusteeAmounts containing the wallet of each trustee
    * @param trusteeWallets containing the max amount each trustee can request
    * @param depositorsAmounts containing the amount each depositor can deposit
    * @param depositorWallets containing the wallet of each depositor
    * @param currency the ERC20 token address for transaction
    **/
    constructor(
        uint256[] memory trusteeAmounts,
        address[] memory trusteeWallets,
        uint256[] memory depositorsAmounts,
        address[] memory depositorWallets,
        uint256 disputeWaitDay,
        uint256 targetAmount,
        bool autoApprove,
        IERC20 currency
    ) {
        require(trusteeAmounts.length > 0, "INVALID");
        require(
            trusteeAmounts.length == trusteeWallets.length &&
                depositorsAmounts.length == depositorWallets.length,
            "INVALID"
        );

        uint256 trusteeLength = trusteeAmounts.length;
        for (uint256 i; i < trusteeLength; i++) {
            address trusteeWallet = trusteeWallets[i];
            Trustee storage trustee = _trustees[trusteeWallet];
            trustee.amount = trusteeAmounts[i];
            trustee.wallet = trusteeWallet;
        }

        uint256 depositLength = depositorsAmounts.length;
        for (uint256 i; i < depositLength; i++) {
            address depositorWallet = depositorWallets[i];
            Depositor storage _depositor = _depositors[depositorWallet];
            _depositor.amount = depositorsAmounts[i];
            _depositor.wallet = depositorWallet;
            _depositorsCount++;
        }

        _currency = currency;
        _targetAmount = targetAmount;
        _manager = ContractManager(msg.sender);
        _disputeWaitDay = disputeWaitDay;

        if (_depositorsCount == 0) {
            _autoApprove = true;
        } else {
            _autoApprove = autoApprove;
        }
    }

    /****************************************************** MODIFIERS *********************************************************************************** */

    /// checks if the caller of the function is a depositor (can deposit into the contract)
    modifier isDepositor() {
        require(_depositors[msg.sender].wallet != address(0), "UNAUTHORIZED");
        _;
    }

    /// checks if the caller of the function is a trustee (can withdraw from the contract)

    modifier isTrustee() {
        require(_trustees[msg.sender].wallet == address(0), "UNAUTHORIZED");
        _;
    }

    /****************************************************** MODIFIERS END ************************************************************************************ */

    /************************************************************** FUNCTIONS *************************************************************************** */

    /// @notice Only a valid depositor can deposit using the currency provided.
    /// You can deposit until you have reached the specified amount
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param amount the amount to deposit
    function deposit(uint256 amount) external isDepositor {
        Depositor storage depositor = _depositors[msg.sender];
        require(depositor.wallet != address(0), "UNAUTHORIZED");
        require(amount > 0, "INVALID");

        // comment because its redundant (save gas!!!)
        // require(_balance + amount <= _targetAmount, "INVALID");

        require(depositor.deposited + amount <= depositor.amount, "INVALID");
        _currency.approve(address(this), amount);
        _currency.transferFrom(msg.sender, address(this), amount);

        // update state
        Deposit storage _deposit = _deposits[++_depositorsCount];
        _deposit.amount = amount;
        _deposit.wallet = msg.sender;

        depositor.deposited += amount;
        depositor.balance += amount;

        _balance += amount;

        _manager.deposit(
            _depositorsCount - 1,
            address(this),
            msg.sender,
            amount
        );
    }

    /// @notice Any body can deposit using the currency provided.
    /// You can deposit until you have reached the specified amount
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param amount the amount to deposit
    function depositAny(uint256 amount) external {
        require(_depositorsCount == 0, "INVALID");
        require(msg.sender != address(0), "UNAUTHORIZED");
        require(_balance + amount <= _targetAmount, "INVALID");
        require(amount > 0, "INVALID");

        // send token to this contract
        _currency.approve(address(this), amount);
        _currency.transferFrom(msg.sender, address(this), amount);

        // update state
        Deposit storage _deposit = _deposits[++_depositorsCount];
        _deposit.amount = amount;
        _deposit.wallet = msg.sender;

        _balance += amount;

        _manager.deposit(
            _depositorsCount - 1,
            address(this),
            msg.sender,
            amount
        );
    }

    /// @notice Only a valid trustee can send withdrawal request
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param amount the amount to withdraw
    /// @param description description of the request
    function request(uint256 amount, string memory description)
        external
        isTrustee
    {
        require(_trustees[msg.sender].balance >= amount, "INVALID");
        require(_balance >= amount, "INVALID");
        require(amount > 0, "INVALID");

        uint256 _prevWithdrawalCount = _withdrawalCount;

        // send a new request
        WithdrawalRequest storage withdrawal = _requests[_prevWithdrawalCount];
        withdrawal.wallet = msg.sender;
        withdrawal.description = description;
        _withdrawalCount++;

        if (_autoApprove) {
            withdrawal.status = WithdrawalStatus.APPROVED;
            _manager.approval(
                _prevWithdrawalCount,
                address(this),
                address(0),
                msg.sender,
                amount
            );
        } else {
            withdrawal.status = WithdrawalStatus.PENDING;
        }
        _manager.request(
            _prevWithdrawalCount,
            address(this),
            msg.sender,
            amount,
            description
        );
    }

    /// @notice Only a valid trustee can send withdrawal request
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param id the id of the withdrawal request
    function reject(uint256 id) external isDepositor {
        WithdrawalRequest storage _request = _requests[id];
        require(
            _request.status == WithdrawalStatus.PENDING &&
                _request.wallet != address(0),
            "INVALID"
        );
        _request.status = WithdrawalStatus.REJECTED;

        uint256 length = _request.votes.length;

        WithdrawalRequestVote[] storage votes = _request.votes;

        for (uint256 i; i < length; i++) {
            _depositors[votes[i].wallet].balance += votes[i].points;
        }

        _request.status = WithdrawalStatus.REJECTED;

        _manager.reject(id, address(this), msg.sender, _request.wallet);
    }

    /// @notice Only a valid depositor can approve
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param id the id of the withdrawal request
    function approve(uint256 id) external isDepositor returns (bool) {
        WithdrawalRequest storage _request = _requests[id];
        require(_request.status == WithdrawalStatus.PENDING, "INVALID");

        uint256 balance = _depositors[msg.sender].balance;
        require(balance > 0, "INVALID");

        uint256 remaingPoint = _request.amount - _request.points;

        if (balance >= remaingPoint) {
            WithdrawalRequestVote memory vote = WithdrawalRequestVote(
                msg.sender,
                remaingPoint
            );

            _request.points += remaingPoint;
            _request.votes.push(vote);
            _request.status = WithdrawalStatus.APPROVED;

            _depositors[msg.sender].balance -= remaingPoint;
            _manager.vote(
                _depositorsCount - 1,
                address(this),
                _request.wallet,
                msg.sender,
                remaingPoint
            );
            _manager.approval(
                _depositorsCount - 1,
                address(this),
                _request.wallet,
                msg.sender,
                remaingPoint
            );

            return true;
        }

        _request.points += balance;
        _request.votes.push(WithdrawalRequestVote(msg.sender, balance));
        _depositors[msg.sender].balance = 0;
        _manager.vote(
            _depositorsCount - 1,
            address(this),
            _request.wallet,
            msg.sender,
            balance
        );

        return false;
    }

    function withdraw(uint256 id) external isTrustee {
        WithdrawalRequest storage _request = _requests[id];
        require(_request.wallet == msg.sender, "UNAUTHORIZED");
        require(_request.status == WithdrawalStatus.APPROVED, "UNAUTHORIZED");
        require(_balance >= _request.amount, "INVALID");

        _currency.transfer(_request.wallet, _request.amount);
    }

    /************************************************************** FUNCTIONS END *************************************************************************** */
}
