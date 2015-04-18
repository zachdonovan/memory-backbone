var Settings = require('./models/settings'),
    Game = require('./models/game'),
    Player = require('./models/player'),
    CardFactory = require('./factories/cardFactory'),
    CardView = require('./views/cardView'),
    ResetView = require('./views/resetView'),
    _ = require('lodash'),
    $ = require('jquery');

settings = new Settings();
player = new Player();
game = new Game();
cards = CardFactory(settings);

game.on('change:gameOver', function (model, value) {
  if (value) {
    var reset = confirm('would you like to play again?');
    if (reset) {
      cards.invoke('set', { faceUp: false });
      game.restart(settings);
    }
  }
});

view$els =  cards.map(function (model) { return (new CardView(model)).$el; });
view$els = _.shuffle(view$els);
resetButton = new ResetView(game);

$(document).ready(function () {
  $('div#grid').html(view$els);
  $('div#restart').html(resetButton.$el);
});
