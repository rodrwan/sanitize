'use strict';

function Sanitize (value) {
  this.str = value;
}

Sanitize.prototype.getValue = function () {
  return this.str;
};

Sanitize.prototype.setValue = function (val) {
  this.str = val;
};

Sanitize.prototype.cleanString = function () {
  var value = this.getValue();
  this.setValue(value.replace(/[^\wáéíóú]/g, ' ').replace(/(\s{2,})/g, ' ').trim());
};

Sanitize.prototype.floatNumber = function () {
  // i.e: $ 10.000,20
  var value = this.getValue();
  this.setValue(parseFloat(value.replace(/[\.\$\s]/g, '').replace(/,/, '.')));
};

Sanitize.prototype.floatNumber2 = function () {
  // i.e: $ 10,000.20
  var value = this.getValue();
  this.setValue(parseFloat(value.replace(/[\,\$\s]/g, '')));
};

Sanitize.prototype.onlyNumber = function () {
  // i.e: $ 10.000 -> 10000
  var value = this.getValue();
  this.setValue(parseFloat(value.replace(/[^\d]/g, '')));
};

Sanitize.prototype.Capitalize = function () {
  var value = this.getValue();
  this.setValue(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
};

module.exports = Sanitize;