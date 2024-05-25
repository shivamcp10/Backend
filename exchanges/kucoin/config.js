require('dotenv').config();
const key1 = process.env.KUCOIN_KEY_15_01_24;
const secret1 = process.env.KUCOIN_SECRETE_15_01_24
module.exports = {
    baseUrl: 'https://openapi-v2.kucoin.com',
    apiAuth: {
      key: key1,
      secret: secret1,
      passphrase: '3pxN9DpPWny',
    },
    authVersion: 2,
  };
  


