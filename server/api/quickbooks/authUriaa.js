const express = require('express');
const router = express.Router();
var OAuthClient = require('intuit-oauth');

router.get('/', (req, res)=>{
  var oauthClient = new OAuthClient({
    clientId: 'ABlGbVCYWs2FnfV3bwdJHT5eBWCc8psEh3EQgaTCwoB0a9n3o6',
    clientSecret: '1nTQRJSVcS7ZaJ8EEEvTUy3djLIY3qzPBe99PUmn',
    environment: 'sandbox',
    redirectUri: 'http://localhost:3000/callback'
  });

  var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting,OAuthClient.scopes.OpenId],state:'testState'});
  let data = {
    authUri,
    oauthClient
  }
  res.send(data);
})

module.exports = router;
