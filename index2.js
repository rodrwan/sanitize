'use strict';

var cleanString = function (value) {
  return value.replace(/[^\wáéíóú]/g, ' ').replace(/(\s{2,})/g, ' ').trim();
};

var floatNumber = function (value) {
  // i.e: $ 10.000,20
  return parseFloat(value.replace(/[\.\$\s]/g, '').replace(/,/, '.'));
};

var floatNumber2 = function (value) {
  // i.e: $ 10,000.20
  return parseFloat(value.replace(/[\,\$\s]/g, ''));
};

var onlyNumber = function (value) {
  // i.e: $ 10.000 -> 10000
  return parseFloat(value.replace(/[^\d]/g, ''));
};

var Capitalize = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

module.exports = {
  'cleanString': cleanString,
  'floatNumber': floatNumber,
  'floatNumber2': floatNumber2,
  'onlyNumber': onlyNumber,
  'Capitalize': Capitalize
};