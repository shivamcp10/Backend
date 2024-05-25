const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Define routes for each exchange
const bybitRoutes = require('./exchanges/bybit/routes');
const mexcRoutes = require('./exchanges/mexc/routes');
const binanceRoutes = require('./exchanges/binance/routes');
const kucoinRoutes = require('./exchanges/kucoin/routes');
const gateRoutes = require('./exchanges/gate/routes');


// Use the routes
app.use('/api/bybit', bybitRoutes);
app.use('/api/mexc', mexcRoutes);
app.use('/api/binance', binanceRoutes);
app.use('/api/kucoin', kucoinRoutes);
app.use('/api/gate', gateRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
