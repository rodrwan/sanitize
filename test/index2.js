'use strict';
var assert = require('assert'); // node.js core module
var Sanitize = require('../index2');

describe('Sanitize', function(){
  describe('#clanString', function(){
    it('should return \'COMPRA NORMAL EN COMERCIO\' when use cleanString()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r EN COMERCIO   \n';
      var res = Sanitize.cleanString(str);
      assert.equal('COMPRA NORMAL EN COMERCIO', res);
    });
  });
  describe('#clanString', function(){
    it('should return \'Traspaso Internet a T Crédito\' when use cleanString()', function(){
      var str = 'Traspaso Internet a T. Crédito';
      var res = Sanitize.cleanString(str);
      assert.equal('Traspaso Internet a T Crédito', res);
    });
  });

  describe('#clanString', function(){
    it('should return \'Traspaso con la Cuenta N 001010128176\' when use cleanString()', function(){
      var str = 'Traspaso con la Cuenta N° 001010128176';
      var res = Sanitize.cleanString(str);
      assert.equal('Traspaso con la Cuenta N 001010128176', res);
    });
  });
  describe('#clanString', function(){
    it('should return \'Compra normal en comercio\' when use cleanString() and Capitalize()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r (EN COMERCIO)\n';
      var res = Sanitize.cleanString(str);
      res = Sanitize.Capitalize(res);
      assert.equal('Compra normal en comercio', res);
    });
  });
  describe('#floatNumber', function(){
    var num = '10.000,20';
    it('should return 10000.2 when use floatNumber() on ' + num, function(){
      var res = Sanitize.floatNumber(num);
      assert.equal(10000.2, res);
    });
  });
  describe('#floatNumber2', function() {
    var num = '10,000.20';
    it('should return 10000.2 when use floatNumber2() on ' + num, function(){
      var res = Sanitize.floatNumber2(num);
      assert.equal(10000.2, res);
    });
  });
  describe('#onlyNumber', function(){
    var num = '10.000.000';
    it('should return 10000000 when use onlyNumber() on ' + num, function(){
      var res = Sanitize.onlyNumber(num);
      assert.equal(10000000, res);
    });
  });
});