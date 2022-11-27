//SPDX-License-Identifier: UNLICENSED
// Adehun Ethereum Virtual Machine Compatible Smart Contract v0.0.1 (DAO.sol)

/**
 * @title Adehun Ethereum Virtual Machine Compatible Smart Contract
 * @dev This contract should not be created directly but by a ContractFactory.
 * This contract is responsible for storing all escrow related information.
 * @author Decentralized Future in Motion Lab Limited
 */

import "./ContractManager.sol";

pragma solidity ^0.8.4;

// TODO: Logic to remove excess funds from the contract
// TODO: add events to contract proposalAdded, proposalExecuted
// TODO: add default DAO members (5x)
contract DAO {
    enum MemberStatus {
        PENDING,
        ACTIVE,
        RENOUNCED,
        REMOVED
    }

    struct Member {
        address account;
        MemberStatus status;
    }

    enum VoteChoice {
        ABSTAIN,
        SUPPORT,
        AGAINST
    }

    struct Vote {
        address account;
        VoteChoice choice;
    }

    struct Proposal {
        address from;
        address to;
        string description;
        uint256 deadline;
        uint256 support;
        uint256 against;
        uint256 abstain;
        bool completed;
        uint256 stake;
        mapping(uint256 => Vote) votes;
        // add - 0, remove - 1
        uint256 category;
    }

    /**
     * @notice this state variable stores the amount
     * that should be staked into the DAO
     **/

    uint256 constant _stakeAmount = 1000 * 10**18;

    /**
     * @notice this state variable stores the amount
     * that should be staked into the DAO
     **/

    uint256 constant _removeStakeAmount = 100 * 10**18;

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

    uint256 _proposalsCount;

    /**
     * @notice number of days before a requests
     * is passed
     **/

    uint256 _proposalDays = 7 days;

    /**
     * @notice this state variable stores the manager
     * that can submit proposal
     **/

    ContractManager immutable _manager;

    /**
     * @notice the coin balance
     **/

    uint256 _balance;

    // TODO: implement minimum_votes
    uint256 minimum_votes;

    constructor(ContractManager manager) {
        _manager = manager;
    }

    receive() external payable {}

    function requestToJoin(string memory description) external payable {
        require(msg.value == _stakeAmount, "INVALID");

        /** you can only join if you formerly renounce or yet to join */
        require(
            _members[msg.sender].account == address(0) ||
                _members[msg.sender].status == MemberStatus.RENOUNCED,
            "UNAUTHORIZED"
        );

        Proposal storage proposal = getProposalByID(++_proposalsCount);

        proposal.stake = _stakeAmount;

        proposal.from = msg.sender;

        proposal.to = msg.sender;

        proposal.deadline = block.timestamp + _proposalDays;

        proposal.description = description;

        proposal.minimum_votes = minimum_votes;

        _balance += msg.value;
    }

    function requestToRemove(string memory description, address account)
        external
        payable
        isMember
    {
        require(msg.value == _removeStakeAmount, "INVALID");

        /** you can only join if you formerly renounce or yet to join */
        require(_members[wallet].status == MemberStatus.ACTIVE, "UNAUTHORIZED");

        Proposal storage proposal = getProposalByID(++_proposalsCount);

        proposal.stake = _removeStakeAmount;

        proposal.from = msg.sender;

        proposal.to = account;

        proposal.deadline = block.timestamp + _proposalDays;

        proposal.description = description;

        proposal.category = 1;

        _balance += msg.value;
    }

    function hasExpired(uint256 deadline) internal returns (bool) {
        return block.timestamp >= deadline;
    }

    function getProposalByID(uint256 id) internal returns (Proposal) {
        return _proposals[id];
    }

    function isZeroAddress(address account) internal returns (bool) {
        return account == address(0);
    }

    function voteForProposal(uint256 id) external isMember {
        Proposal storage proposal = getProposalByID(id);

        require(!hasExpired(proposal.deadline), "DEADLINE");

        proposal.votes[++proposal.total] = Vote(msg.sender, VoteChoice.SUPPORT);

        require(isZeroAddress(vote.account), "CANNOT VOTE");

        proposal.support += 1;
    }

    function voteAgainstProposal(uint256 id) external isMember {
        Proposal storage proposal = getProposalByID(id);

        require(!hasExpired(proposal.deadline), "DEADLINE");

        proposal.votes[++proposal.total] = Vote(msg.sender, VoteChoice.AGAINST);

        require(isZeroAddress(vote.account), "CANNOT VOTE");

        proposal.against += 1;
    }

    modifier canExecuteProposal(uint256 id) {
        Proposal memory proposal = getProposalByID(id);
        require(!proposal.completed, "INVALID");
        require(hasExpired(proposal.deadline), "DEADLINE");
        require(proposal.support > proposal.against, "INVALID");
        require(proposal.total >= proposal.minimum_votes, "INSUFFICIENT");
        _;
    }

    function addMember(uint256 id) external canExecuteProposal(id) {
        Proposal storage proposal = getProposalByID(id);

        require(proposal.category == 0, "WRONG");

        Member storage member = _members[proposal.to];

        require(
            member.status == MemberStatus.PENDING ||
                member.status == MemberStatus.RENOUNCED,
            "INVALID"
        );

        proposal.completed = true;

        member.account = proposal.to;

        member.status = MemberStatus.ACTIVE;

        _membersCount++;
    }

    function removeMember(uint256 id) external canExecuteProposal(id) {
        Proposal storage proposal = getProposalByID(id);

        require(proposal.category == 1, "WRONG");

        Member storage member = _members[proposal.to];

        require(member.status == MemberStatus.ACTIVE, "INVALID");

        proposal.completed = true;

        member.status = MemberStatus.REMOVED;

        payable(proposal.from).transfer(proposal.stake);
    }

    function renounceMembership() external payable isMember {
        require(_balance >= _stakeAmount, "INVALID");
        _members[msg.sender].status = MemberStatus.RENOUNCED;
        payable(msg.sender).transfer(_stakeAmount);
    }

    function isMember(address account) public returns (bool) {
        return _members[account].status == MemberStatus.ACTIVE;
    }

    modifier isMember() {
        require(isMember(msg.sender), "UNAUTHORIZED");
        _;
    }
}
