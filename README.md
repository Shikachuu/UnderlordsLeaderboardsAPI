# Dota Underlords Leaderbords API
## UNOFFICAL

![Alsó szöveg](https://david-dm.org/Shikachuu/UnderlordsLeaderboardsAPI.svg)

![GitHub pull requests](https://img.shields.io/github/issues-pr/Shikachuu/UnderlordsLeaderboardsAPI.svg)

[![Build Status](https://travis-ci.com/Shikachuu/UnderlordsLeaderboardsAPI.svg?branch=master)](https://travis-ci.com/Shikachuu/UnderlordsLeaderboardsAPI)

### Status: Under development
This API is an alternative way to use the Underlords Leaderboards. Basicly I just Web Scrapped the original site and fetch an API from it.
This API is using the following libraries:
- [Request](https://github.com/request/request)
- [Cheerio](https://github.com/cheeriojs/cheerio)
- [Express](https://github.com/expressjs/express/)

### Usage:

#### There are 3 endpoints of this API.

##### The first one is the root:
- this will return the whole list from the first to the last without any filter.
- has got no params
- eg.: https://yoursweet.domain/

##### The second one is the /byRank/
- this will return the players from the position defined in the first parameter to the position defined in the second.
- has got 2 params:
    1. from: number, the index of the first item.
    2. to: number, the last index of the list.
- eg.: https://yoursweet.domain/byRank/1-10

##### The third endpoint is /byName/
- if the player is on the list it will return the rank of the player, else it will return with an error.
- has got one param:
    1. name: string(text), the name of the player who you looking for. 
- eg.: https://yoursweet.domain/byName/Savjz

### ToDo
- Write tests.
- Insert a CI-CD bot.
- Make the first deployment pipe for demo porpuses.
- Add a cache to reduce the load on the server.

*Feel free to ask for contribution.*

_All data and copyright material present here is the intellectual property of Valve Corporation, including the names of the players and every parameter connected to them that is derived to this API. Should you have any legal concerns, please contact me at shikachu@pm.me_
