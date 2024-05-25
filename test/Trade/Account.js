// const Spot = require('../../src/spot')
// const apiKey = 'mx0vglpUAjg9pUMQZZ'
// const apiSecret = '3fceee05776d4e7ca6229c189ac9f841'
// const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


// client.AccountInformation().then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))



// test/Trade/Account.js

const Spot = require('../../src/spot');
require('dotenv').config();
const apiKey = process.env.MEXC_API_KEY_15_01_24;
const apiSecret = process.env.MEXC_SECRETE_15_01_24;
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' });

function executeAccountLogic() {
  return new Promise((resolve, reject) => {
    client.AccountInformation()
      .then(response => {
        // Resolve with the account information
        resolve({ exchange: 'mexc', accountInfo: response.data });
      })
      .catch(error => {
        // Reject with the error information
        reject({ error: 'Error fetching account information' });
      });
  });
}

module.exports = {
  executeAccountLogic,
};
