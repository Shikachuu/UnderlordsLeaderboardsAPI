"use strict";
//inject dependencies
var express = require('express');//express webserver
var fs = require('fs');
var getData = require('./getData');
var app = express();
var port = (typeof process.env.PORT !== 'undefined' ? process.env.PORT : '3000');

app.get('/', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');//return header is json data
    getData(function(data){
        res.send(JSON.stringify(data));//return with json data
    });
});

app.get('/byRank/:from-:to', (req,res)=>{
    getData(function(data){
        let startNum = parseInt(req.param('from'));
        let endNum = parseInt(req.param('to'));
        if (isNaN(startNum) && isNaN(endNum)) {
            res.status(415).send("Entered values aren't numbers. They must be.");
        }else{
            res.setHeader('Content-Type', 'application/json');
            let splitData = data.slice(startNum-1,endNum-1);
            res.send(JSON.stringify(splitData));
        }
    });
});

app.get('/byName/:name', (req,res)=>{
    getData(function (data) {
        if (data != []) {
            let player = data.findIndex((elem)=> elem === req.param('name'));
            console.log(player);
            if (player !== 'undefined' && player != -1){
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(player+1));
            }else{
                res.status(415).send("Can't find player "+req.param('name'));
            }
        }
    })
});

app.listen(port,()=> console.log("Serving on port "+port));
exports = module.exports = app;