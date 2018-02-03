/// Dependencies 
// ======
var express = require('express');
var Path = require('path');
var bodyParser= require('body-parser');


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	console.log('home page requested');
	res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.get('/tables', function (req, res) {
  console.log('tables page requested');
  res.sendFile(path.join(__dirname, 'app/public/tables.html'));
});

app.get('/reserve', function (req, res) {
  console.log('reserve page requested');
  res.sendFile(path.join(__dirname, 'app/public/reserve.html'));
});

// reserve API call
app.post('/api/reserve', function (req, res) {
	console.log('reserve request submitted');
	console.log(req.body);

  var newReservation = req.body;

  tables.push(newReservation);

	 //console.log(tables);

  // Check if user is in the first 5 in list
  var isBooked;
  if(tables.length <= 5){
    isBooked = true;
  }
  else{
    isBooked = false;
  }

  res.json(isBooked);

});


app.post('/api/clear', function (req, res) {
  console.log('clear all tables');
  tables = [];
  res.sendFile(path.join(__dirname, 'app/public/tables.html'));
});

app.post('/api/killreservation', function (req, res) {
  console.log(req.body.id);

  tables.splice(req.body.id, 1);
  // console.log(tables);
  res.json(tables);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
