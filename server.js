// Get packages
var express = require('express');
var mongoose = require('mongoose');
var CostPeriod = require('./bifox/models/costPeriod');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bifox');

// Create an express applicatin
var app = express();

// Use env port or set to 3000
var port = process.env.PORT || 3000;

// Create the router for Express
var router = express.Router();

// -----------------------------------
// Routes
// -----------------------------------

// Dummy route to give us something to test
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You have reached the BiFoX API' });
});




// Register routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('BiFoX now API listening on port ' + port);

