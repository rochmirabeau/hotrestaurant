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
