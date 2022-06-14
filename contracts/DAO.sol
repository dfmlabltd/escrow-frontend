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
        uint256 total;
        uint256 support;
        uint256 against;
        uint256 abstain;
        bool completed;
    }

    enum VoteChoice {
        ABSTAIN,
        SUPPORT,
        AGAINST
    }

    struct Vote {
        address wallet;
        VoteChoice choice;
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

    /**
     * @notice the coin balance
     **/

    uint256 _balance;

    /**
     * @notice state storage for votes
     **/

    mapping(uint256 => mapping(address => Vote)) public _votes;

    constructor(ContractManager manager) {
        _manager = manager;
    }

    receive() external payable {}

    function requestToJoin(string memory reason) external payable {
        require(msg.value == _stakeAmount, "INVALID");
        require(
            _members[msg.sender].wallet == address(0) ||
                _members[msg.sender].status == MemberStatus.RENOUNCED,
            "UNAUTHORIZED"
        );

        MembershipRequest storage request = _memberRequests[
            ++_membersRequestsCount
        ];

        request.wallet = msg.sender;

        request.deadline = block.timestamp + _requestDays;

        request.reason = reason;

        _balance += msg.value;
    }

    function voteOnMembershipRequest(VoteChoice choice, uint256 requestID)
        external
        isMember
    {
        Vote storage vote = _votes[requestID][msg.sender];

        MembershipRequest storage request = _memberRequests[requestID];

        // revert vote
        if (vote.choice == VoteChoice.SUPPORT) {
            request.support -= 1;
        } else if (vote.choice == VoteChoice.AGAINST) {
            request.against -= 1;
        } else if (
            vote.choice == VoteChoice.ABSTAIN && vote.wallet != address(0)
        ) {
            request.abstain -= 1;
        }

        if (vote.wallet != address(0)) {
            request.total -= 1;
        }

        if (choice == VoteChoice.SUPPORT) {
            request.support += 1;
        } else if (choice == VoteChoice.AGAINST) {
            request.against += 1;
        } else if (vote.choice == VoteChoice.ABSTAIN) {
            request.abstain += 1;
        }

        request.total += 1;

        vote.wallet = msg.sender;

        vote.choice = choice;
    }

    function join(uint256 id) external {
        MembershipRequest storage request = _memberRequests[id];

        require(!request.completed, "INVALID");
        require(block.timestamp >= request.deadline, "INVALID");
        require(request.support > request.against, "INVALID");

        Member storage member = _members[msg.sender];

        require(
            member.status == MemberStatus.PENDING ||
                member.status == MemberStatus.RENOUNCED,
            "INVALID"
        );

        if (member.status != MemberStatus.RENOUNCED) {
            _membersAddress[++_membersCount] = msg.sender;
        }

        request.completed = true;
    }

    function renounce() external payable isMember {
        require(_balance >= _stakeAmount, "INVALID");
        _members[msg.sender].status = MemberStatus.RENOUNCED;
        address payable sender = payable(msg.sender);
        sender.transfer(_stakeAmount);
    }

    modifier isMember() {
        require(
            _members[msg.sender].status == MemberStatus.ACTIVE,
            "UNAUTHORIZED"
        );
        _;
    }
}
