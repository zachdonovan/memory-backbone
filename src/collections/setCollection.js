var _ = require('lodash'),
  Set = require('../models/set'),
  Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
  model: Set
});
