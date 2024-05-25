// const Spot = require('../../src/spot')
// require('dotenv').config();
// const apiKey = process.env.MEXC_KEY;
// const apiSecret = process.env.MEXC_SECRETE;

// client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })

// // Specify the trading pair symbol (e.g., 'BTCUSDT')
// const symbol = 'KNCUSDT';

// // client.CurrentOpenOrders().then(response => client.logger.log(response.data))
// //   .catch(error => client.logger.error(error))

// client.CurrentOpenOrders({ symbol }).then(response => client.logger.log(response.data))
//   .catch(error => client.logger.error(error))


// OpenOrder.js

const Spot = require('../../src/spot');
require('dotenv').config();

function executeOpenOrderLogic(symbol) {
  return new Promise((resolve, reject) => {
    const apiKey = process.env.MEXC_API_KEY_15_01_24;
    const apiSecret = process.env.MEXC_SECRETE_15_01_24;

    const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' });

    // Fetch current open orders for the specified symbol
    client.CurrentOpenOrders({ symbol })
      .then(response => {
        // Resolve with the open orders information
        resolve({ exchange: 'mexc', openOrders: response.data });
      })
      .catch(error => {
        // Reject with the error information
        reject({ error: `Error fetching open orders for symbol ${symbol}: ${error.message}` });
      });
  });
}

module.exports = {
  executeOpenOrderLogic,
};
