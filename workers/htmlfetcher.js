var fs = require('fs');
var fetcher = require('../workers/lib/html-fetcher-helpers.js');

var getData = function() {
  var urls = fetcher.readUrls(filepath, callback);
  fetcher.downloadUrls(urls); 
};

