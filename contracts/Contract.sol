//SPDX-License-Identifier: Unlicense
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
    struct Entity {
        uint256 amount;
        uint256 balance;
        uint256 deposited;
        address wallet;
    }

    enum WithdrawalStatus {
        PENDING,
        APPROVED,
        REJECTED
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
        WithdrawalRequestVote [] votes;
        WithdrawalStatus status;
    }

    /***************************************************** STRUCT AND ENUM END ************************************************************************* */

    /************************************************************** MAPPING *************************************************************************** */

    /* @notice stores the information and data pertaining
     * to depositors (contract funders)
     * responsible for making approval
     * a depositor can approve transaction
     * @dev a mapping of depositors address to Entity
     * showing how much each depositor has deposited vs
     * how much more they can approve
     */

    mapping(address => Entity) public _depositors;

    /**
     * @notice stores the information and data pertaining
     * to trustees (addresses with withdrawal permission)
     * responsible for making a withdrawal request
     * @dev a mapping of trustees address to Entity
     * showing how much each trustee can withdraw vs
     * how much they have withdrawn
     **/

    mapping(address => Entity) public _trustees;

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
        uint256  [] memory trusteeAmounts, 
        address [] memory trusteeWallets, 
        uint256 [] memory depositorsAmounts, 
        address [] memory depositorWallets,
        IERC20 currency) {
            require(trusteeAmounts.length > 0, "INVALID");
            require(trusteeAmounts.length == trusteeWallets.length && depositorsAmounts.length == depositorWallets.length, "INVALID");

            uint256 trusteeLength = trusteeAmounts.length;
            for(uint i; i < trusteeLength; i++) {
                address trusteeWallet = trusteeWallets[i];
                Entity storage trustee = _trustees[trusteeWallet];
                trustee.amount = trusteeAmounts[i];
                trustee.wallet = trusteeWallet;
            }

            uint256 depositLength = depositorsAmounts.length;
            for(uint i; i < depositLength; i++) {
                address depositorWallet = depositorWallets[i];
                Entity storage _depositor = _depositors[depositorWallet];
                _depositor.amount = depositorsAmounts[i];
                _depositor.wallet = depositorWallet;
            }

            _currency = currency;
            _manager = ContractManager(msg.sender);
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
        Entity memory sender = _depositors[msg.sender];
        require(sender.wallet != address(0), "UNAUTHORIZED");
        require(sender.deposited + amount <= sender.amount, "INVALID");
        _currency.approve(address(this), amount);
        _currency.transferFrom(msg.sender, address(this), amount);
        _depositors[msg.sender].deposited += amount;
        _depositors[msg.sender].balance += amount;
        _balance += amount;

        _manager.deposit(address(this), msg.sender, amount);
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
        WithdrawalRequest storage withdrawal = _requests[++_withdrawalCount];
        withdrawal.wallet = msg.sender;
        withdrawal.description = description;
        withdrawal.status = WithdrawalStatus.PENDING;
        _manager.request(address(this), msg.sender, amount, description);
    }

    /// @notice Only a valid trustee can send withdrawal request
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param id the id of the withdrawal request
    /// @param description description of the rejection
    function reject(uint256 id, string memory description)
        external
        isDepositor
    {
        WithdrawalRequest storage _request = _requests[id];
        require(_request.status == WithdrawalStatus.PENDING, "INVALID");
        _request.status = WithdrawalStatus.REJECTED;

        uint256 length = _request.votes.length;

        WithdrawalRequestVote[] storage votes = _request.votes;

        for (uint256 i; i < length; i++) {
            _depositors[votes[i].wallet].balance += votes[i].points;
        }

        _request.status = WithdrawalStatus.REJECTED;

        _manager.reject(
            address(this),
            msg.sender,
            _request.wallet,
            description
        );
    }

    /// @notice Only a valid depositor can approve
    /// @dev FUNCTION NEEDS SERIOUS IMPROVEMENT
    /// @param id the id of the withdrawal request
    /// @param description description of the rejection
    function approve(uint256 id, string memory description)
        external
        isDepositor
        returns (bool)
    {
        WithdrawalRequest storage _request = _requests[id];
        require(_request.status == WithdrawalStatus.PENDING, "INVALID");

        uint256 balance = _depositors[msg.sender].balance;
        require(balance > 0, "INVALID");

        uint256 remaingPoint = _request.amount - _request.points;

        if (balance >= remaingPoint) {
            WithdrawalRequestVote memory vote = WithdrawalRequestVote(msg.sender, remaingPoint);
            _request.points += remaingPoint;
            _request.votes.push(vote);
            _request.status = WithdrawalStatus.APPROVED;
            _depositors[msg.sender].balance -= remaingPoint;
            _manager.vote(
                address(this),
                _request.wallet,
                msg.sender,
                description,
                remaingPoint
            );
            _manager.approval(
                address(this),
                _request.wallet,
                msg.sender,
                description,
                remaingPoint
            );

            return true;
        }

        _request.points += balance;
        _request.votes.push(WithdrawalRequestVote(msg.sender, balance));
        _depositors[msg.sender].balance = 0;
        _manager.vote(
            address(this),
            _request.wallet,
            msg.sender,
            description,
            balance
        );

        return false;
    }

    /************************************************************** FUNCTIONS END *************************************************************************** */
}
