'use strict';
var assert = require('assert'); // node.js core module
var Sanitize = require('../index');

describe('Sanitize', function(){
  describe('#clanString', function(){
    it('should return \'COMPRA NORMAL EN COMERCIO\' when use cleanString()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r EN COMERCIO   \n';
      var san = new Sanitize(str);
      san.cleanString();
      assert.equal('COMPRA NORMAL EN COMERCIO', san.getValue());
    });
  });
  describe('#clanString', function(){
    it('should return \'Traspaso Internet a T Crédito\' when use cleanString()', function(){
      var str = 'Traspaso Internet a T. Crédito';
      var san = new Sanitize(str);
      san.cleanString();
      assert.equal('Traspaso Internet a T Crédito', san.getValue());
    });
  });

  describe('#clanString', function(){
    it('should return \'Traspaso con la Cuenta N 001010128176\' when use cleanString()', function(){
      var str = 'Traspaso con la Cuenta N° 001010128176';
      var san = new Sanitize(str);
      san.cleanString();
      assert.equal('Traspaso con la Cuenta N 001010128176', san.getValue());
    });
  });
  describe('#clanString', function(){
    it('should return \'Compra normal en comercio\' when use cleanString() and Capitalize()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r (EN COMERCIO)\n';
      var san = new Sanitize(str);
      san.cleanString();
      san.Capitalize();
      assert.equal('Compra normal en comercio', san.getValue());
    });
  });
  describe('#floatNumber', function(){
    var num = '10.000,20';
    it('should return 10000.2 when use floatNumber() on ' + num, function(){
      var san = new Sanitize(num);
      san.floatNumber();
      assert.equal(10000.2, san.getValue());
    });
  });
  describe('#floatNumber2', function() {
    var num = '10,000.20';
    it('should return 10000.2 when use floatNumber2() on ' + num, function(){
      var san = new Sanitize(num);
      san.floatNumber2();
      assert.equal(10000.2, san.getValue());
    });
  });
  describe('#onlyNumber', function(){
    var num = '10.000.000';
    it('should return 10000000 when use onlyNumber() on ' + num, function(){
      var san = new Sanitize(num);
      san.onlyNumber();
      assert.equal(10000000, san.getValue());
    });
  });
});