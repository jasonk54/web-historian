var fs = require('fs');
var fetcher = require('../workers/lib/html-fetcher-helpers.js');
var _ = require('underscore');

var getData = function() {
  var resultArray = [];
  var urls = fetcher.readUrls('/Users/Catalyst/code/web-historian/data/sites.txt', function (url) {
      resultArray = url});
  _.each(resultArray, function(ele) {
    fetcher.downloadUrls(ele);
  });
};