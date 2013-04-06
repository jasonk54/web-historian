var fs = require('fs');
var https = require('http-get');
var _ = require('underscore');

var duplicateUrlChecker = function(resultArray) {
  var obj = {};

  _.each(resultArray, function(ele) {
    obj[ele] = true;
  })
  return Object.keys(obj);
};

exports.readUrls = function(filePath, cb) {
  var resultArray = [];
  var obj = {};
  var filePath = '/Users/Catalyst/code/web-historian/data/sites.txt'
  
  fileContent = fs.readFileSync(filePath);
  fileContent = fileContent.toString().split("\n");
  return duplicatUrlChecker(cb(fileContent));
};

exports.downloadUrls = function(urls) {
  var filePath = '/Users/Catalyst/code/web-historian/data/sites/';
  if (urls) {
    https.get(urls, filePath + urls, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log('File downloaded at: ' + result.file);
      }
    });
  }
  return true;
};