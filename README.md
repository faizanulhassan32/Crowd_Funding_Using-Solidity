# Crowd_Funding_Using-Solidity
A group based project focusing on development of web3 application along with smart contracts implemented in solidity and connected with ganache

Initially install truffle and ganache in your system.

Open your project directory and write "truffle init". It will create 3 separate folders named contracts, migrations and test.

Place all the 3 solidity contracts in contract folder and put the js migration script in migration folder.

Then write the command "truffle compile". It will create a build folder in your project folder which will have json file for every contract.

Then type "truffle migrate" to deploy the contracts on ganache.

Either use "truffle console" to perform transactions or the front end application has been provided which contains 4 functionalities.
  1) See all addresses from ganache
  2) Make a new request to receive ethers from other accounts
  3) See all requests for donations
  4) Make a donation to any request
