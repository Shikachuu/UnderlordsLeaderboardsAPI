var request = require("request");
var cheerio = require("cheerio");//server side jquery

let getData = function scrapDataFromHtml(callback) {
	let url = "https://underlords.com/leaderboard";
	let players = [];
	request(url, (error, _response, html)=>{
		if (!error) {
			var $ = cheerio.load(html);
			$(".row .player").each((_i, elem)=>{
				players.push($(elem).filter(".player").text());
			});
			callback(players);
		}
	});
};
exports = module.exports = getData;