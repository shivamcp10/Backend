const GateApi = require('gate-api');

async function getTicker(currencyPair) {
  const client = new GateApi.ApiClient();
  // uncomment the next line to change base path
  // client.basePath = "https://some-other-host"

  const api = new GateApi.SpotApi(client);
  const opts = {
    'currencyPair': currencyPair, // Use the provided currencyPair parameter
    'timezone': "utc0" // 'utc0' | 'utc8' | 'all' | Timezone
  };

  try {
    const response = await api.listTickers(opts);
    // Assuming that the response has a 'body' property, adjust this based on the actual structure
    // console.log('API called successfully. Returned data:', response.body);
    return response.body; // Return the data to the caller
  } catch (error) {
    console.error('Error fetching Gate.io ticker:', error.message);
    throw error; // Re-throw the error to the caller
  }
}

// Example usage:
// This is to make the function run when this file is imported
module.exports = { getTicker };

// Call the function with a default currencyPair (you can change it as needed)
// Note: You can replace 'BTC_USDT' with the desired currencyPair when calling the function
