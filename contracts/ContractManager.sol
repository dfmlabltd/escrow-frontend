//SPDX-License-Identifier: UNLICENSED
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (ContractManager.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Contract.sol";

pragma solidity ^0.8.4;

contract ContractManager {
    event Deposit(uint256 identifier, address contractAddress, address depositor, uint256 amount);
    event Request(uint256 identifier, address contractAddress, address depositor, uint256 amount, string description);
    event Rejected(uint256 identifier, address contractAddress, address depositor, address trustee);
    event Vote(uint256 identifier, address contractAddress, address depositor, address trustee, uint256 amount);
    event Withdrawal(uint256 identifier, address contractAddress, address trustee, uint256 amount);
    event Approved(uint256 identifier, address contractAddress, address depositor, address trustee, uint256 amount);

    mapping(uint256 => Contract) public _contracts;

    uint256 _contractsCount;

    mapping(address => bool) public _contractsStatus;

    function create(
        uint256  [] memory trusteeAmounts, 
        address [] memory trusteeWallets, 
        uint256 [] memory depositorsAmounts, 
        address [] memory depositorWallets,
        uint256 disputeWaitDay,
        uint256 targetAmount,
        bool autoApprove,
        IERC20 currency) public {
            Contract _contract = new Contract(trusteeAmounts, trusteeWallets, depositorsAmounts, depositorWallets, disputeWaitDay, targetAmount, autoApprove, currency);
            _contracts[++_contractsCount] = _contract;
    }

    function deposit(
        uint256 id,
        address contractAddress,
        address depositor,
        uint256 amount
    ) external isValidContract {
        emit Deposit(id, contractAddress, depositor, amount);
    }

    function request(
        uint256 id,
        address contractAddress,
        address depositor,
        uint256 amount,
        string memory description
    ) external isValidContract {
        emit Request(id, contractAddress, depositor, amount, description);
    }

    function reject(
        uint256 id,
        address contractAddress,
        address depositor,
        address trustee
    ) external isValidContract {
        emit Rejected(id, contractAddress, depositor, trustee);
    }

    function vote(
        uint256 id,
        address contractAddress,
        address depositor,
        address trustee,
        uint256 balance
    ) external isValidContract {
        emit Vote(id, contractAddress, depositor, trustee, balance);
    }

    function approval(
        uint256 id,
        address contractAddress,
        address depositor,
        address trustee,
        uint256 amount
    ) external isValidContract {
        emit Approved(
            id,
            contractAddress,
            depositor,
            trustee,
            amount
        );
    }

     function withdrawal(
        uint256 id,
        address contractAddress,
        address trustee,
        uint256 amount
    ) external isValidContract {
        emit Withdrawal(
            id,
            contractAddress,
            trustee,
            amount
        );
    }

    modifier isValidContract() {
        require(_contractsStatus[msg.sender], "UNAUTHORIZED");
        _;
    }
}
