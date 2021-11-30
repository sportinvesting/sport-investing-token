# SportInvesting Token

Token smartcontract features:

Upgradeable (we can add new functions, but cannot delete old methods)
Pausable (Admin can pause all token transfers)
Users can give permit for metatransactions


How to deploy


```shell
yarn

npx hardhat compile

npx hardhat run --network bsctestnet scripts/deploy.js
```
