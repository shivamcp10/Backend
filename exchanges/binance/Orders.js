const { Spot } = require("@binance/connector");

require('dotenv').config();
const apiKey = process.env.BINANCE_API_KEY_23_02_24;
const apiSecret = process.env.BINANCE_API_SECRETE_23_02_24;

const client = new Spot(apiKey, apiSecret)


client.allOrders('SOLUSDT')
  .then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))
 