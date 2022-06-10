//SPDX-License-Identifier: Unlicense
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (Contract.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity ^0.8.0;

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

    struct WithdrawalRequest {
        uint256 amount;
        address wallet;
        string description; // stored on IPFS
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

    /// @dev The constructor should be called only by a manager contract
    /// @param currency the ERC20 token address for transaction
    /// @param manager the contract address of the manager contract
    constructor(IERC20 currency, ContractManager manager) {
        _currency = currency;
        _manager = manager;
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
        WithdrawalRequest memory withdrawal = WithdrawalRequest(
            amount,
            msg.sender,
            description,
            WithdrawalStatus.PENDING
        );
        _requests[++_withdrawalCount] = withdrawal;
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
        require(_requests[id].status == WithdrawalStatus.PENDING, "INVALID");
        _requests[id].status = WithdrawalStatus.REJECTED;
        _manager.reject(
            address(this),
            msg.sender,
            _requests[id].wallet,
            description
        );
    }

    /************************************************************** FUNCTIONS END *************************************************************************** */
}

contract ContractManager {
    event Deposit(address, address, uint256);
    event Request(address, address, uint256, string);
    event Rejected(address, address, address, string);

    mapping(address => bool) _contracts;

    function deposit(
        address contractAddress,
        address depositor,
        uint256 amount
    ) external isContract {
        emit Deposit(contractAddress, depositor, amount);
    }

    function request(
        address contractAddress,
        address depositor,
        uint256 amount,
        string memory description
    ) external isContract {
        emit Request(contractAddress, depositor, amount, description);
    }

    function reject(
        address contractAddress,
        address depositor,
        address trustee,
        string memory description
    ) external isContract {
        emit Rejected(contractAddress, depositor, trustee, description);
    }

    modifier isContract() {
        require(_contracts[msg.sender], "UNAUTHORIZED");
        _;
    }
}
