// exchanges/bybit/routes.js

const express = require('express');
const router = express.Router();

router.get('/account', (req, res) => {
  res.json({ exchange: 'bybit', info: 'Account information for Bybit' });
});

// Add more routes as needed

module.exports = router;
