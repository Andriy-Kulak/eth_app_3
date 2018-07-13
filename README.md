to get started
1. `npm install`
2. `ganache-cli` => copy the mneomonic and paste it in metamask and go to localhost:8545
3. `truffle compile` => to compile contract
4. `truffle migrate` => to migrate contract
5. `npm run start` to start the application

The app should work at this point and current value should become 5 after you confirm the  transasction on component mount

*** The problem happens within `src/App.js` when I try to update the storage value to 20 (or any other value). It always returns back a 5 which is weird because it returns a hash and no errors.