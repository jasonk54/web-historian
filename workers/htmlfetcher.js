var fs = require('fs');
var fetcher = require('../workers/lib/html-fetcher-helpers.js');
// var _ = require('underscore');

// var duplicateUrlChecker = function() {
//   var resultArray = [];
//   var obj = {};
//   fetcher.readUrls("/Users/Catalyst/code/web-historian/spec/testdata/sites.txt", function(urls) {
//     resultArray = urls;
//   });
//   _.each(resultArray, function(ele) {
//     obj[ele] = true;
//   })
//   return Object.keys(obj);
// }

var getData = function() {
  var urls = fetcher.readUrls(filepath, callback);
  fetcher.downloadUrls(urls); 
};

