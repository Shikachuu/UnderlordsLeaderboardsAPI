var request = require('request');
var cheerio = require('cheerio');//server side jquery
var fs = require('fs');
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
exports = module.exports = getData;