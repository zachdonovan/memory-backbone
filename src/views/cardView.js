var _ = require('lodash'),
    Backbone = require('../safeBackbone');

module.exports = Backbone.View.extend({
  initialize: function (model, options) {
    this.model = model;
    this.listenTo(this.model, "change:faceUp", this.render);
  },
  events: {
    'click': 'flip'
  },
  tagName: "button",
  className: "card",
  attributes: function () {
    return {
      style: "background: " + this.model.get('distinctiveCharacteristic')
    } 
  },
  render: function () {
    if (this.model.get('faceUp')) {
     this.$el.addClass('faceUp');
    } else {
     this.$el.removeClass('faceUp');
    } 
    return this;
  },
  flip: function () {
    this.model.flip();
  }
});
