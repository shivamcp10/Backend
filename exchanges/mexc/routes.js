// exchanges/mexc/routes.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/account', async (req, res) => {
  try {
    // Debugging log


    // Dynamically import and execute the logic from Account.js
    const accountModule = require(path.resolve(__dirname, '../../test/Trade/Account.js'));

    // Check if the imported module has a specific function, e.g., 'executeAccountLogic'
    if (typeof accountModule.executeAccountLogic === 'function') {
      // Call the function and send the result as the response
      const result = await accountModule.executeAccountLogic();
      res.json(result);
    } else {
      res.status(500).json({ error: 'Invalid module structure' });
    }
  } catch (error) {
    console.error('Error in /api/mexc/account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/open-order', async (req, res) => {
  try {
    // Get the symbol from the request query parameters
    const { symbol } = req.query;
    // const { symbol } = 'KNCUSDT';

    // Check if the symbol is provided
    if (!symbol) {
      return res.status(400).json({ error: 'Symbol is required' });
    }

    // Dynamically import and execute the logic from OpenOrder.js
    const openOrderModule = require(path.resolve(__dirname, '../../test/Trade/OpenOrder.js'));

    // Check if the imported module has a specific function, e.g., 'executeOpenOrderLogic'
    if (typeof openOrderModule.executeOpenOrderLogic === 'function') {
      // Call the function with the symbol and send the result as the response
      const result = await openOrderModule.executeOpenOrderLogic(symbol);
      res.json(result);
    } else {
      res.status(500).json({ error: 'Invalid module structure' });
    }
  } catch (error) {
    console.error('Error in /api/mexc/open-order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/price', async (req, res) => {
  try {
    // Dynamically import and execute the logic from Price.js
    const priceModule = await import('../../test/Market/Price.js');
    
    // Check if the imported module has a specific function, e.g., 'executePriceLogic'
    if (typeof priceModule.executePriceLogic === 'function') {
      // Extract the symbol from the request query
      const symbol = req.query.symbol;

      // Call the function with the symbol (optional) and send the result as the response
      try {
        
        const result = await priceModule.executePriceLogic(symbol);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json({ error: 'Invalid module structure' });
    }
  } catch (error) {
    console.error('Error importing Price.js:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/trade-history', async (req, res) => {
  try {
    // Dynamically import and execute the logic from Price.js
    const priceModule = await import('../../test/Trade/TradeHistory.js');
    
    // Check if the imported module has a specific function, e.g., 'executePriceLogic'
    if (typeof priceModule.executePriceLogic === 'function') {
      // Extract the symbol from the request query
      const symbol = req.query.symbol;

      // Call the function with the symbol (optional) and send the result as the response
      try {
        
        const result = await priceModule.AccountTradeList(symbol);
        res.json(result);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json({ error: 'Invalid module structure' });
    }
  } catch (error) {
    console.error('Error importing Price.js:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// Add more routes as needed

module.exports = router;
