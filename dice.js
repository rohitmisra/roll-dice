var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('please goto /roll');
});

app.get('/roll',function(req, res){
  res.send(''+Math.floor(Math.random()*(6-1+1)+1));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
