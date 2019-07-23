//inject dependencies
var express = require('express');//express webserver
var request = require('request');
var cheerio = require('cheerio');//server side jquery
var fs = require('fs');
//write express app
var app = express();

function getData(callback) {
    let url = 'https://underlords.com/leaderboard';
    let players = [];
    request(url, (error, response, html)=>{
        if (!error) {
            var $ = cheerio.load(html);
            $('.row .player').each((i,elem)=>{
                players.push($(elem).filter('.player').text());
            });
            callback(players);
        }
    });
}
//console.log(getData());
app.get('/', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    getData(function(data){
        res.send(JSON.stringify(data));
    });
});

app.get('/byRank/:from-:to?', (req,res)=>{
    /*if (req.param('to') === ) {
        
    }*/
});
app.get('/byName/:name', (req,res)=>{

});

app.listen('3000');
console.log("Serving on port 3k");
exports = module.exports = app;