const Future = require('../../../src/future');

require('dotenv').config();

const apiKey = process.env.MEXC_API_KEY_15_01_24;
const apiSecret = process.env.MEXC_SECRETE_15_01_24;

const client = new Future(apiKey, apiSecret);

// Function to get assets
function getTransferHistory(options = {}) {
    return new Promise((resolve, reject) => {
      client.TransferRecord(options)
        .then(response => {
          resolve({ exchange: 'mexc', transferRecords: response.data });
        })
        .catch(error => {
          reject({ error: 'Error fetching position history information' });
        });
    });
  }
  
  module.exports = {
    getTransferHistory,
  };
  
