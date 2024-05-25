const express = require('express');
const router = express.Router();
const gatePrice = require('./Price');
const Account = require('./Account')

// Endpoint for /api/gate/price
router.get('/price', async (req, res) => {
    try {
      const { currencyPair } = req.query;
  
      if (!currencyPair) {
        return res.status(400).json({ error: 'Currency pair is required in the query parameters.' });
      }
  
      const tickerData = await gatePrice.getTicker(currencyPair);
  
      res.json(tickerData);
    } catch (error) {
      console.error('Error in Gate price route:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// Endpoint for /api/gate/account
router.get('/account', async (req, res) => {
  try {
      const accountData = await Account.listSpotAccounts();
      res.json(accountData);
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
  