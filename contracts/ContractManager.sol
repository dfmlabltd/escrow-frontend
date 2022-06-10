//SPDX-License-Identifier: Unlicense
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (Contract.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */

import "./Contract.sol";

pragma solidity ^0.8.4;

contract ContractManager {
    event Deposit(address, address, uint256);
    event Request(address, address, uint256, string);
    event Rejected(address, address, address, string);
    event Vote(address, address, address, string, uint256);
    event Approval(address, address, address, string, uint256);

    mapping(address => bool) _contracts;

    constructor() {}

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
        uint256 balance
    ) external isValidContract {
        emit Approval(
            contractAddress,
            depositor,
            trustee,
            description,
            balance
        );
    }

    modifier isValidContract() {
        require(_contracts[msg.sender], "UNAUTHORIZED");
        _;
    }
}
