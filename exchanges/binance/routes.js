// exchanges/bybit/routes.js

const express = require('express');
const router = express.Router();
const account = require('./Account');
const openOrders = require('./Openorders')


// Endpoint for /api/kucoin/account
router.get('/account', async (req, res) => {
  try {
    // Add logic for fetching account information here
    const accountData = await account.getAccountInfo();

    res.json(accountData);
  } catch (error) {
    console.error('Error in Binance account route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Endpoint for /api/kucoin/account
router.get('/openOrders', async (req, res) => {
  try {
    // Add logic for fetching account information here
    const orders = await openOrders.getOpenOrders();

    res.json(orders);
  } catch (error) {
    console.error('Error in Binance account route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add more routes as needed

module.exports = router;
