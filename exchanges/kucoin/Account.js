// Require the SDK
const API = require("kucoin-node-sdk");

async function getAccountInfo() {
  // Initialize the SDK with your configuration
  API.init(require("./config")); // Make sure your config file is correct

  try {
    // Call the getAccountInformation method
    const response = await API.rest.User.Account.getAccountsList();
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error getting account information:", error);
    throw error;
  }
}

module.exports = {
  getAccountInfo
};
