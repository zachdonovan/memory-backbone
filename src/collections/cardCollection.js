var _ = require('lodash'),
  Card = require('../models/card'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Collection.extend({
  model: Card
});
