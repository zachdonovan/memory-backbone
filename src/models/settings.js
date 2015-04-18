/*
 * Settings
 * an elementary data model for storing game configuration
 */
var _ = require('lodash'),
  Card = require('./card'),
  Backbone = require('../safeBackbone');

module.exports = Backbone.Model.extend({
  defaults: {
    cardsPerSet: 2,
    cardFaces: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00", "#00FFFF", "#444444", "#CCCCCC", 'url(images/apple.jpg)', 'url(images/cherry.jpeg)', 'url(images/banana.jpeg)']
  }
});
