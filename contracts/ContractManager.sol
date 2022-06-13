//SPDX-License-Identifier: Unlicense
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
    event Deposit(address, address, uint256);
    event Request(address, address, uint256, string);
    event Rejected(address, address, address, string);
    event Vote(address, address, address, string, uint256);
    event Approval(address, address, address, string, uint256);
    event Withdrawal(address, address, uint256);


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
        address contractAddress,
        address depositor,
        uint256 amount
    ) external isValidContract {
        emit Deposit(contractAddress, depositor, amount);
    }

    function request(
        address contractAddress,
        address depositor,
        uint256 amount,
        string memory description
    ) external isValidContract {
        emit Request(contractAddress, depositor, amount, description);
    }

    function reject(
        address contractAddress,
        address depositor,
        address trustee,
        string memory description
    ) external isValidContract {
        emit Rejected(contractAddress, depositor, trustee, description);
    }

    function vote(
        address contractAddress,
        address depositor,
        address trustee,
        string memory description,
        uint256 balance
    ) external isValidContract {
        emit Vote(contractAddress, depositor, trustee, description, balance);
    }

    function approval(
        address contractAddress,
        address depositor,
        address trustee,
        string memory description,
        uint256 amount
    ) external isValidContract {
        emit Approval(
            contractAddress,
            depositor,
            trustee,
            description,
            amount
        );
    }

     function withdrawal(
        address contractAddress,
        address trustee,
        uint256 amount
    ) external isValidContract {
        emit Withdrawal(
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
