var _ = require('lodash'),
  Guess = require('./guess'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    guess: null
  },
  initialize: function (attrs, options) {
    this.listenTo(Backbone, 'guessedCard', this.handleCard);
  },
  handleCard: function (card) {
    var guess = this.get('guess') || new Guess();
    guess.guessCard(card);
    this.set('guess', guess);
  }
});
