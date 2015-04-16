var Settings = require('./models/settings'),
    //Game = require('./models/game'),
    Card = require('./models/card'),
    CardView = require('./views/cardView');

$ = require('jquery');
theCard = new Card();
theCardView = new CardView(theCard);

$(document).ready(function () {
  $('body div#grid').html(theCardView.$el);
});
