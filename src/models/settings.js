var _ = require('lodash'),
  Card = require('./card'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    cardsPerSet: 2,
    cardFaces: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00", "#00FFFF", "#444444", "#CCCCCC", 'url(images/apple.jpg)', 'url(images/cherry.jpeg)', 'url(images/banana.jpeg)']
  },
  getColorWheel: function (numColors) {
    return _.map(_.range(0, 360, (360 / this.get('cardFaces').length)), _.bind(function (hue) { return this.formatColorString(hue, 100, 50); }, this));
  },
  formatColorString: function (h, s, l) {
    return "hsl("+h+", "+s+"%, "+l+"%)";
  }

});
