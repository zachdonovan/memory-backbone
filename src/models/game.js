/*
 * Game
 * the global game state object
 */
var _ = require('lodash'),
    Backbone = require('../safeBackbone');


module.exports = Backbone.Model.extend({
  defaults: {
    gameOver: false,
    correctGuesses: 0,
    totalGuesses: 0,
    numSets: 11,
    hiScore: 0,
    currentScore: 0
  },
  initialize: function () {
    this.listenTo(Backbone, "correctGuess", this.incrementCorrect);
    this.listenTo(Backbone, "incorrectGuess", this.incrementTotal);

  },
  incrementCorrect: function () {
    this.increment('correctGuesses');
    this.incrementTotal();
    this.checkEnd();
  },
  incrementTotal: function () {
    this.increment('totalGuesses');
  },
  increment: function (prop) {
    this.set(prop, this.get(prop) + 1);

  },
  checkEnd: function () {
    if ( this.get('correctGuesses') >= this.get('numSets') ) {
      this.set('gameOver', true);
    }

  }
});
