import { getData } from "getData";
//inject dependencies
var express = require('express');//express webserver
var fs = require('fs');
//write express app
var app = express();
app.get('/', (req,res)=>{
    getData();
});
app.listen('3000');
console.log("Serving on port 3k");
exports = module.exports = app;