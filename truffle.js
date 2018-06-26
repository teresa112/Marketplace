/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

//module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
//};

module.exports = {
  networks: {
    development: {
      host: "localhost", //could be a number but often gets confused 
      port: 7545, //match with ganache
      network_id: "*" // Match any network id - for now fine because it's local, other networks have codes 1 (main),2-4 (test)   
    }

  }
};
