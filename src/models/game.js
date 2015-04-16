/*
 * Game
 * the global game state object
 */
var _ = require('lodash'),
    Backbone = require('../safeBackbone');


module.exports = Backbone.Model.extend({
  defaults: {
    gameOver: false,
    hiScore: 0,
    currentScore: 0
  }
});
