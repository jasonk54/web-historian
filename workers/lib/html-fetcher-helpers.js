var fs = require('fs');
var https = require('http-get');
// var http = require('http'); 

exports.readUrls = function(filePath, cb) {
  fileContent = fs.readFileSync(filePath);
  fileContent = fileContent.toString().split("\n");
  cb(fileContent);
};

exports.downloadUrls = function(urls) {
  var filePath = '/Users/Catalyst/code/web-historian/data/sites/';
  if (urls) {
    https.get(urls, filePath + urls, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log('File downloaded at: ' + filePath + urls);
      }
    });
  }
  return true;
};