const { exchangeCode } = require('@twurple/auth');
const config = require('./config.json');
const axios = require('axios');
const express = require('express');
const fs = require('fs');

const FirstURL = encodeURI(`https://id.twitch.tv/oauth2/authorize?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&scope=${config.scope}`);

// Open FirstURL in browser, and catch the response code
const app = express();
const port = 3000;

app.get('/auth', (req, res) => {
  res.redirect(FirstURL);
});

app.get('/', async (req, res) => {
  const authCode = req.query.code;
  const tokenData = await exchangeCode(config.client_id, config.client_secret, authCode, config.redirect_uri);
  fs.writeFileSync('token.json', JSON.stringify(tokenData, null, 2));
  res.send('Authorization code received. You can close this window.');
  console.log(JSON.stringify(tokenData, null, 2));
  // Here you can proceed with exchanging the auth code for an access token
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
