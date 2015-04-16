var _ = require('lodash'),
  Card = require('./card'),
  Set = require('./set'),
  Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    sets: 10,
    cardsPerSet: 2
  },
  generateCard: function () {
    return new Card();
  },
  generateSet: function (color) {
    return new Set({ color: color, cards: _.map(_.range(this.get('cardsPerSet')), function () { return new Card(); })});
  },
  generateAllSets: function () {

  },
  getColorWheel: function (numColors) {
    return _.map(_.range(0, 360, (360 / this.get('sets'))), _.bind(function (hue) { return this.formatColorString(hue, 100, 50); }, this));
    
  },
  formatColorString: function (h, s, l) {
    return "hsl("+h+", "+s+"%, "+l+"%)";
  }

});
