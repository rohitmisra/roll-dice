var express = require('express');
var app = express();

function roll(){
	return Math.floor(Math.random()*(6-1+1)+1);
}

app.get('/', function (req, res) {
  res.send('please goto /roll');
});

app.get('/roll',function(req, res){
  res.send(''+ roll());
});

app.listen(3000, function () {
  console.log('Rolling dice app listening on port 3000!');
});
