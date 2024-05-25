const { Spot } = require("@binance/connector");
require('dotenv').config();

const apiKey = process.env.BINANCE_API_KEY_23_02_24;
const apiSecret = process.env.BINANCE_API_SECRETE_23_02_24;

const client = new Spot(apiKey, apiSecret);

// Get account information

async function getAccountInfo() {
  try {
    const response = await client.account(); // Use await to wait for the response
    const balances = response.data.balances;
    const filteredBalances = balances.filter((balance) => {
      const free = parseFloat(balance.free);
      const locked = parseFloat(balance.locked);
      return free !== 0 || locked !== 0; // Change to || to filter out assets where either free or locked is not 0
    });

    // client.logger.log(filteredBalances);
    return filteredBalances; // Return the filtered balances
  } catch (error) {
    console.error("Error getting account information:", error);
    throw error;
  }
}

module.exports = {
  getAccountInfo,
};
