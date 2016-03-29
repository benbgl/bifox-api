var mongoose = require('mongoose');

var CostPeriodSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  default: Boolean
});

module.exports = mongoose.model('CostPeriod', CostPeriodSchema);
