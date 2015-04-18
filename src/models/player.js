var _ = require('lodash'),
  Guess = require('./guess'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    guess: null,
    hiScore: 0
  },
  initialize: function (attrs, options) {
    this.listenTo(Backbone, 'guessedCard', this.handleCard);
    this.listenTo(Backbone, 'gameOver', this.updateHiScore);
  },
  handleCard: function (card) {
    var guess = this.get('guess') || new Guess();
    guess.guessCard(card);
    this.set('guess', guess);
  },
  updateHiScore: function (candidateScore) {
    this.set('hiScore', _.max([this.get('hiScore'), candidateScore]));
  }
});
