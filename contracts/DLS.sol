// SPDX-License-Identifier: UNLICENSED
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

pragma solidity ^0.8.3;

contract DLS is Ownable {
    // TODO: add dls members recommendation features
    // TODO: adding gasless voting proposal for adding new members
    // TODO: adding proposal to remove users
    // TODO: adding dispute resolution feature
    // TODO: add external interface to let people verify wether a  user is a member of our

    enum MemberStatus {
        REMOVED,
        ACTIVE
    }

    struct Member {
        address account;
        MemberStatus status;
    }

    struct Proposal {
        address creator;
        address proposedMember;
        string ref;
        bool proposalExecuted;
        uint256 deadline;
        uint256 yea;
        uint256 nay;
        bool action;
        mapping(address => bool) voted;
    }

    mapping(uint256 => Proposal) _proposals;

    uint256 _proposalsCount;

    mapping(uint256 => Member) _members;

    mapping(address => uint256) _members_ids;

    uint256 _membersCount;

    event MemberRemoved(address member, address by);

    event MemberAdded(address member, address by);

    event MemberProposal(address member, address by);

    // check if the address is a member of the DLS
    // !!! BEWARE !!! recommended to remove will return true
    modifier notMember(address member) {
        require(!isMember(member), "member must not be an address zero");
        _;
    }

    modifier isNonZeroAddress(address account) {
        require(account != address(0), "account is an address zero");
        _;
    }

    function isActiveMember(address member) external view returns (bool) {
        uint256 memberId = _getMemberIDByAddress(member);
        Member memory _member = Member[memberId];
        if (_member.account != member) {
            return false;
        }
        if (_member.status != MemberStatus.ACTIVE) {
            return false;
        }
        return true;
    }

    function isMember(address member)
        internal
        view
        isNonZeroAddress(member)
        returns (bool)
    {
        uint256 memberId = _getMemberIDByAddress(member);
        Member memory _member = Member[memberId];
        if (_member.account != member) {
            return false;
        }
        return true;
    }

    function _getMemberIDByAddress(address member)
        internal
        view
        returns (uint256)
    {
        uint256 memberId = _members_ids[member];
        return memberId;
    }

    function addMember(address member)
        external
        isNonZeroAddress(member)
        isOwner
    {
        require(activeMembersCount <= 10, "you can not use direct method");
        _members[_membersCount] = MemberStatus(member, MemberStatus.ACTIVE);
        _members_ids[member] = _membersCount++;
        activeMembersCount++;
    }

    function removeMember(address member)
        external
        isNonZeroAddress(member)
        isOwner
    {
        require(activeMembersCount <= 20, "you can not use direct method");
        uint256 memberId = _getMemberIDByAddress(member);

        Member storage _member = _members[memberId];

        _member.status = MemberStatus.REMOVED;

        activeMembersCount--;
    }

    function proposeMember(address member, string memory ref)
        external
        isNonZeroAddress(member)
        isOwner
        notMember(member)
        returns (uint256)
    {
        Proposal storage _proposal = _proposals[_proposalsCount];

        _proposal.creator = msg.sender;
        _proposal.member = member;
        _proposal.ref = ref;
        _proposal.deadline = block.timestamp + 1 weeks;
        _proposal.action = true;
        emit MemberProposal(member, msg.sender);
        return _proposalsCount++;
    }

    function voteOnProposal(uint256 proposalID, bool vote)
        public
        isMember(msg.sender)
    {
        require(
            !_proposals[proposalID].voted[msg.sender],
            "you have already voted on this proposal"
        );
        if (vote) {
            _proposals[proposalID].yea++;
        } else {
            _proposals[proposalID].nay++;
        }
        _proposals[proposalID].voted[msg.sender] = true;
    }

    function executeMembershipProposal(uint256 proposalID)
        public
        isMember(msg.sender)
    {
        Proposal storage _proposal = _proposals[proposalID];
        require(_proposal.deadline > block.timestamp, "deadline is not over");
        require(!_proposal.proposalPassed, "proposal");

        _proposals.proposalExecuted = true;

        if(_proposals.nay >= _proposals.yea) {
            return;
        }

        if (_proposal.action) {
            _members[_membersCount] = Member(
                _proposal.proposedMember,
                MemberStatus.ACTIVE
            );
            return;
        }

        uint256 ID = _getMemberIDByAddress(_proposal.proposedMember);

        _members[ID].status = MemberStatus.REMOVED;
    }
}
