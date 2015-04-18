/*
 * Guess
 * a model for tracking user guesses
 */
var _ = require('lodash'),
    CardCollection = require('../collections/cardCollection'),
    Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    guessLength: 2,
    matchesOn: null
  },
  initialize: function (attrs, options) {
    this.set('guessedCards', new CardCollection());
  },
  guessCard: function (card) {
    var guessedCards = this.get('guessedCards');
    if(!guessedCards.length) {
      this.set('matchesOn', card.get('face'));
      guessedCards.add(card);
    } else if(this.get('guessedCards').contains(card)) {
    } else if (this.get('matchesOn') === card.get('face')) {
      guessedCards.add(card); 
      if (guessedCards.length === this.get('guessLength')) {
        guessedCards.invoke('set', { matched: true});
        guessedCards.reset();
        this.set('matchesOn', null);
        Backbone.trigger('correctGuess');
      }
    } else {
      guessedCards.add(card); 
      setTimeout(_.bind(function () {
      guessedCards.invoke('set', { faceUp: false});
      guessedCards.reset();
      }, this), 500);
      Backbone.trigger('incorrectGuess');
    }
  }
});
