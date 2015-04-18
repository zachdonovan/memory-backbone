/*
 * Card
 * a basic model for individual memory tiles
 */
var _ = require('lodash'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    faceUp: false,
    matched: false,
    face: "red"
  },
  show: function () {
    this.set('faceUp', true);
    Backbone.trigger('guessedCard', this);
  },
  hide: function () {
    this.set('faceUp', false);
  }

});
