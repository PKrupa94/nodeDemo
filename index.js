var express = require('express');
var app = express();
var bodyparser = require('body-parser');

console.log('request come');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


//get
app.get('/',function(req,res){
    res.send('get request');
});

//post
app.post('/login',function(req,res){
    console.log('resquest',req.body);
    res.json(req.body)
    res.send('recevice data')
});

//put

app.put('/putRes',function(req,res){
    res.send('put request come');
});

//delete
app.delete('/deleteRes',function(req,res){
    res.send('delete resqust');
});

var server = app.listen(3000,function(){ 
    console.log('connected to server' );
});