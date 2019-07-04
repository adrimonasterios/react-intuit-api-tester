const express = require('express');
const router = express.Router();
var OAuthClient = require('intuit-oauth');

router.get('/', function(req, res) {
 console.log(req.query);
 oauthClient.createToken(req.url)
    .then(function(authResponse) {
          oauth2_token_json = JSON.stringify(authResponse.getJson(), null,2);
      })
     .catch(function(e) {
          console.error(e);
      });

 res.send('');
});

module.exports = router;
