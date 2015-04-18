var CardCollection = require('../collections/cardCollection'),
    _ = require('lodash');

module.exports = function (settings) {
  cardAttrs =  _.chain(settings.get('cardFaces'))
                .map(function (face) {
                  return _.range(settings.get('cardsPerSet'))
                          .map(function (i) {
                            return face;
                          });
                })
                .flatten()
                .map(function (face) {
                  return { face: face };
                })
                .value();
  cards = new CardCollection(cardAttrs);

  return cards;

}

