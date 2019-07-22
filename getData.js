var request = require('request');
var cheerio = require('cheerio');
function getData() {
    let url = 'https://underlords.com/leaderboard';
    let array = [];
    request(url, (error, response, html)=>{
        if (!error) {
            var $ = cheerio.load(html);
            $('.row .player').each((i,elem)=>{
                console.log($(elem).filter('.player').text());
                array.push($(elem).filter('.player').text());
            });
        }
    });
    return array;
}
console.log(getData());
