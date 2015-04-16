var Settings = require('./models/settings'),
    //Game = require('./models/game'),
    Card = require('./models/card'),
    CardView = require('./views/cardView'),
    _ = require('lodash'),
    $ = require('jquery');

// placeholder settings
colors = ["#0000FF", "#00FF00", "#FF0000", "#FFFF00", "#00FFFF", "#888888", "#444444", "#CCCCCC"]

view$els = _.chain(colors)
 .map(function (color) { return [ color, color ]; })
 .flatten()
 .map(function (color) { return new Card({ distinctiveCharacteristic: color }); })
 .map(function (model) { return (new CardView(model)).$el; })
 .value();

$(document).ready(function () {
  $('body div#grid').html(view$els);
});
