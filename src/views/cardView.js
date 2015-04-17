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
  render: function () {
    if (this.model.get('faceUp')) {
     this.$el.addClass('faceUp');
     this.$el.removeClass('faceDown');
     this.$el.css('background', this.model.get('face'));
    } else {
     this.$el.addClass('faceDown');
     this.$el.removeClass('faceUp');
     this.$el.css('background', '');
    } 
    return this;
  },
  flip: function () {
    if(!this.model.get('matched')) { this.model.show(); }
  }
});
