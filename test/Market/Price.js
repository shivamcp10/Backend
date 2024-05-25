// const Spot = require('../src/spot')
// const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


// client.SymbolPriceTicker().then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))




// test/Market/Price.js
// test/Market/Price.js
// test/Market/Price.js

const Spot = require('../../src/spot');
require('dotenv').config();
const apiKey = process.env.MEXC_API_KEY_15_01_24;
const apiSecret = process.env.MEXC_SECRETE_15_01_24;
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' });

function executePriceLogic(symbol) {
  return new Promise((resolve, reject) => {
    const requestParams = symbol ? { params: { symbol } } : {};

    client.SymbolPriceTicker(requestParams)
      .then(response => {
        // Resolve with the price information
        resolve({ exchange: 'mexc', symbol: symbol || 'allSymbols', priceInfo: response.data });
      })
      .catch(error => {
        // Reject with the error information
        reject({ error: 'Error fetching price information' });
      });
  });
}

module.exports = {
  executePriceLogic,
};
