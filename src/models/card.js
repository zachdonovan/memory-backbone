var _ = require('lodash'),
  Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    faceUp: false,
    distinctiveCharacteristic: "red"
  },
  flip: function () {
    this.set('faceUp', !this.get('faceUp'));
  }

});
