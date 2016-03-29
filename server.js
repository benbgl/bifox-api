// Get packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var CostPeriod = require('./bifox/models/costPeriod');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bifox');

// Create an express applicatin
var app = express();
// Use body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));

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

// CostPeriod endpoint
// /api/costPeriod
costPeriodRoute = router.route('/costPeriod');

costPeriodRoute.post(function(req, res) {
  var costPeriod = new CostPeriod();

  costPeriod.name = req.body.name;
  costPeriod.active = req.body.active;
  costPeriod.default = req.body.default;

  costPeriod.save(function(err) {
    if(err) res.send(err);

    res.json({ message: 'CostPeriod successfully created', data: costPeriod });
  });
});



// Register routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('BiFoX now API listening on port ' + port);

