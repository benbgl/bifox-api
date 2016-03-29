var mongoose = require('mongoose');

var CostPeriodSchema = new mongoose.Schema({
  rev_id: Number,
  name: String,
  active: { type: Boolean, default: false },
  default: { type: Boolean, default: false }
});

module.exports = mongoose.model('CostPeriod', CostPeriodSchema);
