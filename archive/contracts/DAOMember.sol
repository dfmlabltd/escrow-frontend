//SPDX-License-Identifier: UNLICENSED

abstract contract DAOMember {
    mapping(address => bool) _members;

    function isMember(address member) internal virtual {}

    function removeMember(address member) internal virtual {}

    function addMember(address member) internal virtual {}

    function recommendMember(address member) internal virtual {}
}
