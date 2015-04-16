var _ = require('lodash'),
  Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    faceUp: false,
    descriptiveCharacteristic: "red"
  },
  flip: function () {
    this.set('faceUp', !this.get('faceUp'));
  }

});
