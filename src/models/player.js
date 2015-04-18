/*
 * Player
 * model for tracking player data across games
 */
var _ = require('lodash'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    hiScore: 0
  },
  initialize: function (attrs, options) {
    this.listenTo(Backbone, 'gameOver', this.updateHiScore);
  },
  updateHiScore: function (candidateScore) {
    this.set('hiScore', _.max([this.get('hiScore'), candidateScore]));
  }
});
