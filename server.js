// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


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
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
 });
// Displays all reservations
app.get("/api/currentRes", function(req, res) {
  console.log(currentRes)
    return res.json(currentRes);
  });

app.get("/api/waiting", function(req, res) {
    return res.json(waiting);
  });

// Create New Reservations - takes in JSON input
app.post("/api/currentRes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  currentRes.push(newReservation);

  res.json(newReservation);
});

//s
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});