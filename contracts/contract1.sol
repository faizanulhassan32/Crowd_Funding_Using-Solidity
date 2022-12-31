// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
contract contract1 {
    

    struct crowdFundReq {
        uint id;
        string requestName;
        uint requestMoney;
        uint moneyRecieved;
        address payable requestCreator;
        
    }

    crowdFundReq[] public allRequests;
 
    address payable owner;
 
    constructor() {
        owner = payable(msg.sender);
    }

    function addNewRequest(uint requestNumber,string memory requestName, uint requestMoney,address payable creator) external {
        // uint requestNumber = allRequests.length;
        // require (requestMoney>0,"request money should be greator than 0");
        allRequests.push(crowdFundReq(requestNumber,requestName, requestMoney, 0,creator));
    }

    function getLength() public view returns(uint){
        return allRequests.length;
    }

   


     function getAllRequests() external view returns (crowdFundReq[] memory) {
        return allRequests;
    }


    function addMoney(uint money,uint id) external {
        allRequests[id].moneyRecieved+=money;

        
    }


}



