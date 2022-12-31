// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "./contract1.sol";


contract contract2 {

    struct crowdFundReq {
        uint id;
        string requestName;
        uint requestMoney;
        uint moneyRecieved;
        address payable requestCreator;
        
    }
    
    contract1 con1;

    constructor(address _t) {
        con1 = contract1(_t);
    }

     function getLength() public view returns(uint){
        return con1.getLength();
    }

    function addReq(string memory requestName, uint requestMoney,address payable creator) public{
    	uint requestNumber = con1.getLength();
        require (requestMoney>0,"request money should be greator than 0");
        con1.addNewRequest(requestNumber,requestName,requestMoney,creator);
    }


    function getAllRequests() public view returns (contract1.crowdFundReq [] memory reqs)
    {
      reqs = con1.getAllRequests();
      return reqs;
    }

    function addMoney(uint money, uint id) external {
        con1.addMoney(money,id);
    }
  
  

}
