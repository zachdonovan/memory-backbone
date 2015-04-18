var _ = require('lodash'),
    Backbone = require('../safeBackbone');

module.exports = Backbone.View.extend({
  initialize: function (model, options) {
    this.model = model;
    this.listenTo(this.model, "change:faceUp", this.render);
  },
  events: {
    'click': 'restart'
  },
  tagName: "button",
  className: "restart",
  restart: function () {
    this.model.restart();
  }
});
