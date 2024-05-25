// exchanges/kucoin/kucoinAccessToken.js

const axios = require('axios');
const express = require('express');
const router = express.Router();

async function getAccessToken() {
  try {
    const apiUrl = 'https://api.kucoin.com/api/v1/bullet-public';

    const response = await axios.post(apiUrl);

    if (response.data.code === '200000' && response.data.data && response.data.data.token) {
      const accessToken = response.data.data.token;
      return accessToken;
    } else {
      console.error('Failed to get public access token from KuCoin:', response.data);
      throw new Error('Failed to get access token from KuCoin');
    }
  } catch (error) {
    console.error('Error in KuCoin public token route:', error.message);
    throw new Error('Failed to get access token from KuCoin');
  }
}

module.exports = { getAccessToken };
