var Backbone = require('../src/safeBackbone'),
    Card = require('../src/models/card'),
    should = require('should');

describe('Card', function () {
  describe('#show()', function () {
    it('turns the card face up', function () {
      var card = new Card();
      (card.get('faceUp')).should.be.false;
      
      card.show();
      (card.get('faceUp')).should.be.true;

    });

    it('is idempotent', function () {
      var card = new Card();
      (card.get('faceUp')).should.be.false;
      
      card.show();
      (card.get('faceUp')).should.be.true;

      card.show();
      (card.get('faceUp')).should.be.true;

      card.show();
      card.show();
      (card.get('faceUp')).should.be.true;
      
    });

    it('triggers a global event', function () {
      var card = new Card(),
          called = false;

      Backbone.listenTo(Backbone, 'guessedCard', function (obj) {
        obj.should.be.exactly(card);
        called = true;
      });

      card.show();
      (called).should.be.true;

    });
  });

  describe('#hide', function () {
    it('turns the card face down', function () {
      var card = new Card({faceUp: true});
      (card.get('faceUp')).should.be.true;

      card.hide();
      (card.get('faceUp')).should.be.false;

    });

    it('is idempotent', function () {
      var card = new Card({faceUp: true});
      
      card.hide();
      (card.get('faceUp')).should.be.false;

      card.hide();
      (card.get('faceUp')).should.be.false;

      card.hide();
      card.hide();
      (card.get('faceUp')).should.be.false;
      
    });
  });

});
