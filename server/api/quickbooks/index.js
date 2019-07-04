const express = require('express');
const router = express.Router();
var OAuthClient = require('intuit-oauth');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var oauth2_token_json = null;
var oauthClient = null;

/**
 * Get the AuthorizeUri
 */
router.get('/authUri', urlencodedParser, function(req,res) {
    oauthClient = new OAuthClient({
      clientId: 'ABlGbVCYWs2FnfV3bwdJHT5eBWCc8psEh3EQgaTCwoB0a9n3o6',
      clientSecret: '1nTQRJSVcS7ZaJ8EEEvTUy3djLIY3qzPBe99PUmn',
      environment: 'sandbox',
      redirectUri: 'http://localhost:3000/callback'
    });

    var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting],state:'intuit-test'});
    console.log(authUri);
    res.send(authUri);
});


/**
 * Handle the callback to extract the `Auth Code` and exchange them for `Bearer-Tokens`
 */
router.get('/callback', function(req, res) {
  console.log(req.query);
    oauthClient.createToken(req.query.uri)
       .then(async function(authResponse) {
          oauth2_token_json = await JSON.stringify(authResponse.getJson(), null,2);
         })
        .catch(function(e) {
             console.error(e);
         });
    res.send('');

});

/**
 * Display the token : CAUTION : JUST for sample purposes
 */
router.get('/retrieveToken', function(req, res) {
    res.send(oauth2_token_json);
});

router.get('/getCompanyInfo', function(req,res){
  console.log('----------------------------------');

    var companyID = oauthClient.getToken().realmId;

    var url = oauthClient.environment == 'sandbox' ? OAuthClient.environment.sandbox : OAuthClient.environment.production ;

    oauthClient.makeApiCall({url: url + 'v3/company/' + companyID +'/companyinfo/' + companyID})
        .then(function(authResponse){
            console.log("The response for API call is :"+JSON.stringify(authResponse));
            res.send(JSON.parse(authResponse.text()));
        })
        .catch(function(e) {
            console.error(e);
        });
});



module.exports = router;
