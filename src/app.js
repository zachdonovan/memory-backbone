var Settings = require('./models/settings'),
    Game = require('./models/game'),
    Player = require('./models/player'),
    Card = require('./models/card'),
    CardCollection = require('./collections/cardCollection'),
    CardView = require('./views/cardView'),
    _ = require('lodash'),
    $ = require('jquery');

// placeholder settings
colors = ["#0000FF", "#00FF00", "#FF0000", "#FFFF00", "#00FFFF", "#888888", "#444444", "#CCCCCC"]
images = ['url(images/apple.jpg)', 'url(images/cherry.jpeg)', 'url(images/banana.jpeg)']
cardFaces = colors.concat(images);
cardAttrs = _.chain(cardFaces).map(function (face) { return [ face, face ]; }).flatten().map(function (face) { return { face: face }; }).value();

cards = new CardCollection(cardAttrs);
player = new Player();
game = new Game();

game.on('change:gameOver', function () {
  confirm('would you like to play again?');
});

view$els =  cards.map(function (model) { return (new CardView(model)).$el; });

view$els = _.shuffle(view$els);

$(document).ready(function () {
  $('body div#grid').html(view$els);
});
