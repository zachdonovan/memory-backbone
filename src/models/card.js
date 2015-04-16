var _ = require('lodash'),
  Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    faceUp: false,
    face: "red"
  },
  flip: function () {
    this.set('faceUp', !this.get('faceUp'));
  },
  hide: function () {
    this.set('faceUp', false);
  }

});
