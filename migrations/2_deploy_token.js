const RtkxProjectToken = artifacts.require("RtkxProjectToken");

module.exports = function(deployer) {
    deployer.deploy(RtkxProjectToken);
};