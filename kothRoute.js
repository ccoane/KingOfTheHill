var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = __dirname + '/views/';
var timer = require('./timer');

// NOTE: Many calls that should be POST/PUT are set to get
// for ease of testing in a browser.  Once this project is
// in an "Alpha" phase, then change the endpoints to the
// appropriate HTTP Method

router.get("/status/",function(req,res){
    var obj = JSON.stringify(timer.getAllTimers());
    res.send(obj);
});

router.get("/status/:Team",function(req,res){
    var teamVal = req.params.Team;
    var obj = JSON.stringify(timer.getTimerForTeam(teamVal));
    res.send(obj);
});

router.get('/startTimer/:Team', function (req, res) {
    var teamVal = req.params.Team;
    var obj = timer.startTimer(teamVal);
    res.send(JSON.stringify(obj));
});

router.post('/startTimer', function (req, res) {
    var teamVal = req.body.Team;
    var obj = timer.startTimer(teamVal);
    res.send(JSON.stringify(obj));
});

router.get("/reset",function(req,res){
    var obj = timer.resetAndStopTimers();
    res.send(obj);
});

router.get('/addTeam/:Team', function (req, res) {
    var teamVal = req.params.Team;
    var obj = timer.addTeam(teamVal);
    res.send(JSON.stringify(obj));
});

module.exports = router;

// HORRIBLE PLACEHOLDER CODE BELOW

// router.get("/",function(req,res){
//     res.sendFile(path + "index.html");
// });