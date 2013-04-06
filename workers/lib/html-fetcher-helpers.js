var fs = require('fs');
var https = require('http-get');
var _ = require('underscore');

exports.readUrls = function(filePath, cb) {

  fileContent = fs.readFileSync(filePath);
  fileContent = fileContent.toString().split("\n");
  return cb(fileContent);
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