const { Spot } = require("@binance/connector");
require('dotenv').config();
const apiKey = process.env.BINANCE_API_KEY_23_02_24;
const apiSecret = process.env.BINANCE_API_SECRETE_23_02_24;

const client = new Spot(apiKey, apiSecret);
// Get account information

async function getOpenOrders() {
    try {
      const response = await client.openOrders(); // Use await to wait for the response
  
      // Manually serialize the response.data to JSON
      const jsonData = JSON.stringify(response.data, (key, value) => {
        if (typeof value === 'bigint') {
          return value.toString(); // Convert BigInt to string
        }
        return value;
      });
  
      return JSON.parse(jsonData); // Parse the JSON back to an object
    } catch (error) {
      console.error("Error getting Open Orders:", error);
      throw error;
    }
  }
  
  
  module.exports = {
      getOpenOrders
  };