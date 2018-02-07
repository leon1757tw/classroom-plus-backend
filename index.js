const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello world!');
});

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server Start! Run at ${process.env.PORT} port`);
});