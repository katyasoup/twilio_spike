var router = require('express').Router();

var accountSid = process.env.TW_ACC_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TW_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

router.post('/', function(req, res){
    client.messages.create({
        body: 'Hey, your API connection totally works!', // this should be grabbed from input field on DOM
        to: process.env.TO_NUMBER,  // Text this number
        from: process.env.FROM_NUMBER // From a valid Twilio number
    })
    .then(function(message) {
        console.log(message.sid);
    });
    res.sendStatus(200);
});

module.exports = router;