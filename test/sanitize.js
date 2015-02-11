'use strict';
var assert = require('assert'); // node.js core module
var Sanitize = require('../sanitize');

describe('Sanitize', function(){
  describe('#clanString', function(){
    it('should return \'COMPRA NORMAL EN COMERCIO\' when use cleanString()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r EN COMERCIO   \n';
      var res = Sanitize.cleanString(str);
      assert.equal('COMPRA NORMAL EN COMERCIO', res);
    });
  });
  describe('#clanString', function(){
    it('should return \'Traspaso Internet a T. Crédito\' when use cleanString()', function(){
      var str = 'Traspaso Internet a T. Crédito';
      var res = Sanitize.cleanString(str);
      assert.equal('Traspaso Internet a T. Crédito', res);
    });
  });

  describe('#clanString', function(){
    it('should return \'Traspaso con la Cuenta N° 001010128176\' when use cleanString()', function(){
      var str = 'Traspaso con la Cuenta N° 001010128176';
      var res = Sanitize.cleanString(str);
      assert.equal('Traspaso con la Cuenta N° 001010128176', res);
    });
  });
  describe('#clanString', function(){
    it('should return \'Compra normal en comercio\' when use cleanString() and Capitalize()', function(){
      var str = '\t\rCOMPRA\t\t\tNORMAL\t\t\r (EN COMERCIO)\n';
      var res = Sanitize.cleanString(str);
      res = Sanitize.capitalize(res);
      assert.equal('Compra normal (en comercio)', res);
    });
  });
  describe('#formatNumberInt', function(){
    var num = '10.000,20';
    it('should return 10000.2 when use formatNumberInt() on ' + num, function(){
      var res = Sanitize.formatNumberInt(num);
      assert.equal(10000.2, res);
    });
  });
  describe('#formatNumberInt2', function() {
    var num = '10,000.20';
    it('should return 10000.2 when use formatNumberInt2() on ' + num, function(){
      var res = Sanitize.formatNumberInt2(num);
      assert.equal(10000.2, res);
    });
  });
  describe('#formatNumberNat', function(){
    var num = '10.000.000';
    it('should return 10000000 when use formatNumberNat() on ' + num, function(){
      var res = Sanitize.formatNumberNat(num);
      assert.equal(10000000, res);
    });
  });
});