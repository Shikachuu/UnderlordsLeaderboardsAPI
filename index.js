var getData = require('./getData');
//inject dependencies
var express = require('express');//express webserver
var fs = require('fs');
//write express app
var app = express();

app.get('/', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getData));
});

app.get('byRank/:from-:to?', (req,res)=>{
    
});
app.get('/byName/', (req,res)=>{

});

app.listen('3000');
console.log("Serving on port 3k");
exports = module.exports = app;