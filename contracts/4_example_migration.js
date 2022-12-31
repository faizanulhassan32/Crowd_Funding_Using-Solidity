var MyContract1 = artifacts.require("contract1");
var MyContract2 = artifacts.require("contract2");
var MyContract3 = artifacts.require("contract3");


module.exports = function(deployer) {
// deployment steps
	deployer.deploy(MyContract1).then(function(){
		return deployer.deploy(MyContract2,MyContract1.address).then(function(){
			return deployer.deploy(MyContract3,MyContract2.address);
		});
	});
}