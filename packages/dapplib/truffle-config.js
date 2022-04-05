require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember method idea prize outer stool'; 
let testAccounts = [
"0xdd421703eb92bc130e84ad8fc4a2aa133de6ee1d867aa068bde76c6603e449e3",
"0x8c8f69c1fb10e30255499e34d67c496e76809a7183aef05bd0b9db362f5ced81",
"0x237bcf4bf5c7dc0de2ef3a1d1963b70d1eac68b1f1965e53d360aa37240a90e6",
"0xd170a1850d92247ab578d2dd5d525efb6757f2565980fd0d7518be2fc72155ba",
"0x5fafe4ce3d64a5ff73943e95e0bc7f8153cc47a447a41ed1c56bee333b5b68c5",
"0xd89911af9feac02e779f19c1d4020b8350c521758cf04781ef29611cb4f71ee0",
"0x78f5512e386b8c4e725f57afd15c9616d16fad674667e6e939999dd3afd8ace4",
"0xa0439cd0442487781c28a5ddd6c41551e31ef29f3626c3b420dc5304efcea774",
"0xd2464156cd6af1de75e11c6f30ac06532c647471b2c61899b97c3af94fd250fe",
"0xfd1f283c8b0839e60757971cc5611727b8e44bc9d7a6b503a3f15938468d01d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

