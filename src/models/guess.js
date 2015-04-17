var _ = require('lodash'),
    CardCollection = require('../collections/cardCollection'),
    Backbone = require('backbone');

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
      console.log('first guess! face is: ', card.get('face'));
      this.set('matchesOn', card.get('face'));
      guessedCards.add(card);
      console.log('guessedCards length: ', guessedCards.length);
    } else if(this.get('guessedCards').contains(card)) {
      console.log('ninny! you already guessed that!');
    } else if (this.get('matchesOn') === card.get('face')) {
      console.log('a matching card!');
      guessedCards.add(card); 
      if (guessedCards.length === this.get('guessLength')) {
        guessedCards.set('matched', true);
        guessedCards.reset();
        Backbone.trigger('correctGuess');
      }
    } else {
      console.log('nope, that is very wrong');
      guessedCards.add(card); 
      setTimeout(_.bind(function () {
      guessedCards.invoke('set', { faceUp: false});
      guessedCards.reset();
      }, this), 500);
      Backbone.trigger('incorrectGuess');
    }
  }
});
