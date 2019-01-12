// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Data
// ===========================================================
var currentRes = [{
    routeName: "customer1",
    name: "larry",
    email: "larry@gmail.com",
    phone: 33333333
    
  }, {
    routeName: "customer2",
    name: "reba",
    email: "reba@gmail.com",
    phone: 22222222
  }, {
    routeName: "customer3",
    name: "bob",
    email: "bob@gmail.com",
    phone: 33333333
   
  }];

  var waiting = [{
    routeName: "waiting1",
    name: "larry",
    email: "larry@gmail.com",
    phone: 33333333
    
  }, {
    routeName: "waiting2",
    name: "reba",
    email: "reba@gmail.com",
    phone: 22222222
  }, {
    routeName: "waiting3",
    name: "bob",
    email: "bob@gmail.com",
    phone: 33333333
   
  }];


// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/currentRes", function(req, res) {
  return res.json(currentRes);
});
// Displays all characters
app.get("/api/currentRes", function(req, res) {
    return res.json(currentRes);
  });

app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
  });
app.get("/customer2", function(req, res) {
  res.json(customer2);
});



// YOUR CODE GOES HERE
app.get("/customer3", function(req, res) {
  res.json(customer3);
});
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});