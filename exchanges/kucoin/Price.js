const axios = require('axios');

const kucoinBaseUrl = 'https://api.kucoin.com'; // Use the appropriate base URL based on your requirements

async function getTicker(symbol) {
  const endpoint = '/api/v1/market/orderbook/level1';
  const url = `${kucoinBaseUrl}${endpoint}?symbol=${symbol}`;

  try {
    const response = await axios.get(url);

    // Handle the response data
    const tickerData = response.data;
    // console.log('Ticker Data:', tickerData);
    // Access specific fields like tickerData.price, tickerData.size, etc.

    return tickerData; // Return the data to the caller
  } catch (error) {
    console.error('Error fetching KuCoin ticker:', error.message);
    throw error; // Re-throw the error to the caller
  }
}

// Example usage:
// This is to make the function run when this file is imported
module.exports = { getTicker };

// Call the function with a default symbol (you can change it as needed)

