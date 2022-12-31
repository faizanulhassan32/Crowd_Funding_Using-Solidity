// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "./contract2.sol";


contract contract3 {

    struct crowdFundReq {
        uint id;
        string requestName;
        uint requestMoney;
        uint moneyRecieved;
        address payable requestCreator;
        
    }
    
   contract2 con2;

    constructor(address _t2) {
       
        con2 = contract2(_t2);
    }

    function addReq(string memory requestName, uint requestMoney) public{
        con2.addReq(requestName,requestMoney,payable(msg.sender));
    }


    function getAllRequests() public view returns (contract1.crowdFundReq [] memory reqs)
    {
      reqs = con2.getAllRequests();
      return reqs;
    }

    function giveDonation(uint id) public payable  returns (contract1.crowdFundReq [] memory reqs){
        reqs = con2.getAllRequests();
        require(msg.value>0,"Amount should be greator than 0");
        require(id<con2.getLength(),"id is invalid");
        require(msg.sender.balance>0,"You dont have the given ethers");
        (bool success,) = reqs[id].requestCreator.call{value:msg.value}("");  
        require(success, "Failed to send money");  
        con2.addMoney(msg.value/1000000000000000000,id);
        
    }

  

}
