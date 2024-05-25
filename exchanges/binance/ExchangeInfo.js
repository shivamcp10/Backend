const { Spot } = require("@binance/connector");
// const { Market } = require("@binance/connector");
require('dotenv').config();

const apiKey = process.env.BINANCE_API_KEY_23_02_24;
const apiSecret = process.env.BINANCE_API_SECRETE_23_02_24;

let symbolsArray = [];
let tradesArray = [];
const client_market = new Spot();
client_market
  .exchangeInfo()
  .then((response) => {
    let symbols_Temp = response.data.symbols;
    let baseAssets = [];

    if (symbols_Temp) {
      symbols_Temp.forEach((element) => {
        if (element.quoteAsset === "USDT") {
          symbolsArray.push(element.symbol);
        }
      });
    }




    if (symbolsArray) {
      const client = new Spot(apiKey, apiSecret);
      symbolsArray.forEach((element) => {
        client
        .allOrders(element)
        .then((response) => 
        tradesArray.push(response)
        )
        .catch((error) => client.logger.error(error));
      });
    }








    console.log('symbolsArray : ', symbolsArray);
    console.log("tradesArray : ", tradesArray)

  })
  .catch((error) => {
    console.error("Error fetching exchange info:", error);
  });
