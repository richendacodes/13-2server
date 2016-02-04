var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get('/login', function(req, res) {
  res.sendFile(process.cwd() + "/views/login.html");
});

app.get("/help", function(req, res) {
  res.sendFile(process.cwd() + "/views/help.html");
});

app.get("/account", function(req, res) {
  res.sendFile(process.cwd() + "/views/account.html");
});

app.post("/login", function(req, res) {

  if (req.body.email === "a@b.com" && req.body.password === "anything") {
    console.log(req.body);
    var myHTML = "<h1>Email: " + req.body.email + "</h1>";
    myHTML += "<h1>Password: " + req.body.password + "</h1>";
    res.redirect('/account');
  } else {
    console.log(req.body);
    var myHTML = "<h1>Email: " + req.body.email + "</h1>";
    myHTML += "<h1>Password: " + req.body.password + "</h1>";
    res.redirect('/');
  }
  

});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});