//SPDX-License-Identifier: UNLICENSED

import "./SimpleEscrowContract.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


pragma solidity ^0.8.3;

contract SimpleEscrowContractManager is Ownable {
    mapping(SimpleEscrowContract => bool) _escrows;

    /**
     * @notice the amount to be deducted from each deposit
     * @dev in percentage fee
     */

    uint8 private _fee;

    /**
     * @notice stores the address of the decentralised legal system.
     * The DLS is responsible for dispute resolution and mediation.
     * @dev only this address should be allowed to withdraw from the contract, raise dispute etc.
     */

    address private _dls;

    /*  *************************** START EVENT  ********************************  */

    event EscrowCreated(
        uint256 amount, 
        address tokenAddress, 
        address depositor, 
        address beneficiary, 
        string ref, 
        address contractAddress
    );
    
    event Deposit(
        address contractAddress, 
        address depositor, 
        uint256 amount
    );

    event Withdrawal(
        address contractAddress,
        address beneficiary,
        address depositor,
        uint256 amount
    );

    /*  *************************** END OF EVENT  ********************************  */

    modifier isEscrowContract(address contractAddress) {
        require(_escrows[contractAddress], "address is not a escrow contract");
    }

    /**
     * @notice this method runs when the contract is deployed
     * @param dls the decentralized legal system
     * @param fee the amount per deposit transaction
     **/

    constructor(address dls, uint256 fee) {
        _setDLS(dls);
        _setFee(fee);
    }

    // TODO: setfee function
    function create(
        uint256 amount,
        address token,
        address beneficiary,
        string memory ref
    ) external {
        SimpleEscrowContract escrow = new SimpleEscrowContract(
            amount,
            token,
            msg.sender,
            beneficiary,
            address(this)
        );
        _escrows[address(escrow)] = true;

        emit EscrowCreated(amount, token, msg.sender, beneficiary, ref, address(escrow));
    }

    function depositEvent(
        address contractAddress, 
        address depositor, 
        uint256 amount
    ) internal isEscrowContract(msg.sender) {
        emit Deposit(
            contractAddress, 
            depositor, 
            amount
        );
    }

    function withdrawEvent(
        address contractAddress, 
        address depositor,
        address beneficiary,
        uint256 amount,
        uint256 nonce
    ) internal isEscrowContract(msg.sender) {
        emit Withdrawal(
            contractAddress,
            depositor, 
            beneficiary,
            amount,
            nonce,
            requestHash,
            signature
        );
    }

    /**
     * @notice this method sets the fees
     * @dev in percentage
     * @param manager the fee per deposit
     **/

    function _setFee(uint8 fee) public onlyOwner {
        _fee = fee;
    }

    /**
     * @notice this method is  used in setting the decentralized legal system
     * @param dls the address of the dls
     **/

    function _setDLS(address dls) public onlyOwner {
        require(dls.isContract(), "dls address is not a contract");
        _dls = dls;
    }

    

}
