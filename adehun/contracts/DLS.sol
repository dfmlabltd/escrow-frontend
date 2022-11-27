// SPDX-License-Identifier: UNLICENSED
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

pragma solidity ^0.8.3;

contract DLS is Ownable {
    // TODO: extend DAO
    // TODO: add dls members recommendation features
    // TODO: adding gasless voting proposal for judging decision
    // TODO: adding proposal to remove users - now handled by DAO
    // TODO: adding dispute resolution feature

    // ref is a reference to the user documents

    function decisionHash(
        address contractAddress,
        bool decision,
        uint25 caseId
    ) external {
        return
            keccak256(
                abi.encodePacked(
                    address(this),
                    contractAddress,
                    decision,
                    caseId
                )
            );
    }

    function _checkMemberSignature(
        bytes32 decisionHash,
        bytes memory signature,
        address account
    ) external view returns (bool) {
        bytes32 signedDecisionHash = decisionHash.toEthSignedMessageHash();
        address signer = signedDecisionHash.recover(signature);
        require(isActiveMember(account), "invalid signature");

        return true;
    }
}
