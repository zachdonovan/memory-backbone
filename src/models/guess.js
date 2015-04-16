var _ = require('lodash'),
    CardCollection = require('
    Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    guessLength: 2
    matchesOn: null
  },
  initialize: function (attrs, options) {
    this.set('guessedCards' new CardCollection(attrs.guessedCards));
  },
  guessCard: function (card) {
    var guessedCards = this.get('guessedCards');
    if(!guessedCards.length) {
      this.set('matchesOn', card.get('face'));
      guessedCards.add(card);
    } else if(this.get('guessedCards').contains(card)) {
      console.log('ninny! you already guessed that!');
    } else if (this.get('matchesOn') === card.get('face')) {
      console.log('a matching card!');
      guessedCards.add(card); 
      if (guessedCards.length === this.get('guessLength')) {
        guessedCards.set('matched', true);
        this.trigger('correctGuess');
      }
    } else {
      this.trigger('incorrectGuess');
      setTimeout(function () {
      guessedCards.set('faceUp', false);
      guessedCards.set('matched', false);
      }, 500);
    }
  }
});
