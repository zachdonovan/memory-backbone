var _ = require('lodash'),
  Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    faceUp: false,
    matched: false,
    face: "red"
  },
  show: function () {
    this.set('faceUp', true);
    Backbone.trigger('guessedCard', this);
  },
  hide: function () {
    this.set('faceUp', false);
  }

});
