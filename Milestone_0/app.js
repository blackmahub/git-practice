var express = require('express');
var parser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use( express.static( "Public" ) );
var server = app.listen(17022, "localhost", function()
{
  var host = server.address().address;
  var port = server.address().port;
  console.log("Host: "+host+" Port: "+port);
});

var urlencodedParser = parser.urlencoded({ extended: false })

app.get('/swetaketumajumder', function(req,res)
{
  res.render('index');
});

app.get('/aleksandar', function(req,res)
{
  res.render('./Aleks/Aleks-Profile');
});

app.get('/swetaketu', function(req,res)
{
  res.render('./Swetaketu/index');
});

app.get('/akhila', function(req,res)
{
  res.render('./Akhila/Akhila_Profile');
});

app.get('/mahbubur', function(req,res)
{
  res.render('./Mahbub/mahbub');
});

app.get('/mahdis', function(req,res)
{
  res.render('./Mahdis/cv2');
});
