const Spot = require('../../src/spot')
const apiKey = process.env.MEXC_API_KEY_15_01_24;
const apiSecret = process.env.MEXC_SECRETE_15_01_24;
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


client.AccountTradeList().then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))