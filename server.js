// server.js
// where your node app starts

// init project
var express = require('express');
var converter = require('./converter.js')
var app = express();

app.get('/',(req,res) => {

 res.send('<div style= "text-align:center"><h1>Hi there,</h1>'
          +'<h2>This is a natural date / timestamp converter.<br> Example Usage:<br></h2>'
          +'<div style="font-style:italic;"><h2>https://handy-army.glitch.me/1500000000<br>https://handy-army.glitch.me/July 14, 2017</h2></div>'
          +'<h3> Made in NodeJS by Alejandro Gallarati, GitHub: <a href="https://github.com/radamant24">Radamant24</a></h3>'); 
  
})


app.get('/:dateParam', (req,res) => {
  var date = req.params.dateParam;
  var setRes = function(finalDate){res.send(finalDate)}
  converter(date, setRes);
  
  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
