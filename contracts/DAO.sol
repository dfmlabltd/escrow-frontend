//SPDX-License-Identifier: Unlicense
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (DAO.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */

import "./ContractManager.sol";

pragma solidity ^0.8.4;


contract DAO {

    enum MemberStatus {
        INVALID,
        PENDING,
        ACTIVE,
        RENOUNCED,
        BANNED
    }

    struct Member {
        address wallet;
        MemberStatus status;
    }

    struct MembershipRequest {
        address wallet;
        string reason;
        uint256 deadline;
    }

    /**
     * @notice this state variable stores the amount
     * that should be staked into the DAO
    **/

    uint256 constant _stakeAmount = 1000 * 10**18;


    /**
     * @notice this state variable stores the members
     * of the DAO
    **/

    mapping(address => Member) _members;

    /**
     * @notice this state variable stores the members
     * of the DAO
    **/

    mapping(uint256 => address) _membersAddress;

    /**
     * @notice this state variable stores the number
     * members of people in the DAO
    **/

    uint256 _membersCount;


    /**
     * @notice this state variable stores the membership
     * requests to join DAO
    **/

    mapping(uint256 => MembershipRequest) _memberRequests;

    /**
     * @notice number of requests in the DAO
    **/

    uint256 _membersRequestsCount;

    /**
     * @notice number of days before a requests
     * is passed
    **/

    uint256 _requestDays = 7 days;

    /**
     * @notice this state variable stores the manager
     * that can submit proposal
     **/

    ContractManager immutable _manager;

    constructor(ContractManager manager) {
        _manager = manager;
    }

    receive() external payable {
    }

    function requestToJoin(string memory reason) external payable {
        require(msg.value == _stakeAmount, "INVALID");
        require(_members[msg.sender].wallet == address(0) || 
            _members[msg.sender].status == MemberStatus.RENOUNCED, "UNAUTHORIZED");

        MembershipRequest storage request =  _memberRequests[++_membersRequestsCount];

        request.wallet = msg.sender;

        request.deadline =  block.timestamp + _requestDays;

        request.reason = reason;

    }

   
}