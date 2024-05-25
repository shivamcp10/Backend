// Account.js

const GateApi = require("gate-api");
require('dotenv').config();



async function listSpotAccounts() {
    const key = process.env.GATE_KEY_21_01_24;
    const secrete = process.env.GATE_SECRETE_21_01_24;

    const client = new GateApi.ApiClient();
    client.setApiKeySecret(key, secrete);

    const api_SpotApi = new GateApi.SpotApi(client);
    try {
        const value = await api_SpotApi.listSpotAccounts();
        return value.body; // Return the account data
    } catch (error) {
        console.error(error);
        throw error; // Throw the error to be caught by the route handler
    }
}

module.exports = {
    listSpotAccounts
};
