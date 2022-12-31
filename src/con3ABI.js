export const CON3_ADDRESS = '0xc9E6Aff17e60682D82272769A22F88be37F38343'
export const CON3_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_t2",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "requestName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "requestMoney",
        "type": "uint256"
      }
    ],
    "name": "addReq",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllRequests",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "requestName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "requestMoney",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "moneyRecieved",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "requestCreator",
            "type": "address"
          }
        ],
        "internalType": "struct contract1.crowdFundReq[]",
        "name": "reqs",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "giveDonation",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "requestName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "requestMoney",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "moneyRecieved",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "requestCreator",
            "type": "address"
          }
        ],
        "internalType": "struct contract1.crowdFundReq[]",
        "name": "reqs",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]