require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember hole give arena bottom genuine'; 
let testAccounts = [
"0x9faa8891fa3c6a38c73cb79ee4039e5b102867ec010ce78364406e58f6facf63",
"0x7ff238d3de2abb2de8dcc60c60e80b11e2a2b7d43ff8f7032dc0acc5ed56dc51",
"0xa8ccda62959b6338bcb3436b326fdebf13d18253978f65500d832c363c458cf2",
"0xe931fc811b3437fc3ec3ccbc38d868cb30dd2813bb9bf6ddcea8a7193964e7d8",
"0xcd039b14f19f9c64f69aaf888e01b729b34f533c212be88d5071d95109495f94",
"0x61b1a55c8ae2f20dd6afcf43575d2744ae6af32d66da144a2504bda2fc7b82d9",
"0xdeec2b874f6e1a1594bbed718290fccb2c3dda8f8a1d9b29b4cae9ce3ee5db4f",
"0x359e31ee5fbacb6f61fbecd06c6cfa69eebc2ab49ef26b006d45e15d9d53cdb1",
"0x696ce828ad7ffa92caf1c73eeee2c6ac3d462cf333313c8f27bd9990cda7bb54",
"0xd463f7babfe45e0bb9e606abbb416cdb6a7860b7f3483e34fc01bf912879c303"
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

