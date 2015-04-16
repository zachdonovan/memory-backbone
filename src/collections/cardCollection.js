var _ = require('lodash'),
  Card = require('../models/card'),
  Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
  model: Card
});
