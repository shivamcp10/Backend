const express = require('express');
const router = express.Router();
const kucoinPrice = require('./Price');
const kucoinAccount = require('./Account');
const kucoinAccessToken = require('./kucoinAccessToken');
const kucoinOrders = require('./Orders'); // Import the Orders module

// Endpoint for /api/kucoin/price
router.get('/price', async (req, res) => {
  try {
    const { symbol } = req.query;

    if (!symbol) {
      return res.status(400).json({ error: 'Symbol is required in the query parameters.' });
    }

    const tickerData = await kucoinPrice.getTicker(symbol);

    res.json(tickerData);
  } catch (error) {
    console.error('Error in KuCoin price route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for /api/kucoin/account
router.get('/account', async (req, res) => {
  try {
    // Add logic for fetching account information here
    const accountData = await kucoinAccount.getAccountInfo();

    res.json(accountData);
  } catch (error) {
    console.error('Error in KuCoin account route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for /api/kucoin/orders
router.get('/orders', async (req, res) => {
  try {
    // Add logic for fetching orders here
    const ordersData = await kucoinOrders.getOrders();

    res.json(ordersData);
  } catch (error) {
    console.error('Error in KuCoin orders route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for /api/kucoin/access-token
router.get('/access-token', async (req, res) => {
    try {
      const accessToken = await kucoinAccessToken.getAccessToken();
      res.json({ accessToken });
    } catch (error) {
      console.error('Error in KuCoin access token route:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
