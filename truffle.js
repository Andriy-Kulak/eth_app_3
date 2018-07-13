const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       'skill october purchase stairs attack culture click cycle atom maid monster dove',
    //       'https://rinkeby.infura.io/yGU1efDtsMTxmGUSJOva')
    //   },
    //   network_id: 3
    // }
  }
};