var express = require('express');
var router = express.Router();
var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: "トークン"
}).startRTM(function(err, bot, payload){
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  bot.say({
        channel: 'general',
        text: 'WebAPI完成',
        username: 'test',
        icon_url: ''
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
