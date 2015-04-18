var CardCollection = require('../collections/cardCollection'),
    _ = require('lodash');

module.exports = function () {
// placeholder settings
colors = ["#0000FF", "#00FF00", "#FF0000", "#FFFF00", "#00FFFF", "#888888", "#444444", "#CCCCCC"]
images = ['url(images/apple.jpg)', 'url(images/cherry.jpeg)', 'url(images/banana.jpeg)']
cardFaces = colors.concat(images);
cardAttrs = _.chain(cardFaces).map(function (face) { return [ face, face ]; }).flatten().map(function (face) { return { face: face }; }).value();
cards = new CardCollection(cardAttrs);

return cards;

}

