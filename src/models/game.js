/*
 * Game
 * responsible for all core game logic and state 
 */
var _ = require('lodash'),
    Guess = require('./guess'),
    Backbone = require('../safeBackbone');


module.exports = Backbone.Model.extend({
  defaults: {
    gameOver: false,
    guess: null,
    correctGuesses: 0,
    totalGuesses: 0,
    numSets: 10,
    hiScore: 0,
    currentScore: 0
  },
  initialize: function () {
    this.listenTo(Backbone, 'guessedCard', this.handleCard);
    this.listenTo(Backbone, "correctGuess", this.incrementCorrect);
    this.listenTo(Backbone, "incorrectGuess", this.incrementTotal);
  },
  handleCard: function (card) {
    var guess = this.get('guess') || new Guess();
    guess.guessCard(card);
    this.set('guess', guess);
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
      Backbone.trigger('hiScore', (this.get('correctGuesses') / this.get('totalGuesses')));
    }
  },
  restart: function (settings) {
    this.set({ correctGuesses: 0,
               totalGuesses:   0,
               currentScore:   0,
               gameOver:       false
    });
  }
});
