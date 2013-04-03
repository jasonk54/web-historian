var http = require('http');
var query = require('querystring');
var url = require('url');
var fs = require('fs');

exports.datadir = __dirname + "/data/sites.txt";

exports.handleRequest = function (request, response) {
  // console.log(exports.datadir);
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var responseCode = 200;
  var message;
  var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type" : "text/html"
  };
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/html";

  request.on('data', function(chunk) {
    if (request.method === 'POST') {

    }
  });
  request.on('end', function() {
    var getPathname = url.parse(request.url).pathname;
    if (request.method === 'GET') {
      if (getPathname === '/') {
        response.writeHead(responseCode, headers);
        response.end(fs.readFileSync(__dirname + '/public/index.html'));
      } else if (getPathname.length > 1) {
        response.writeHead(responseCode, headers);
        response.end(fs.readFileSync(__dirname + '/data/sites.txt'));
      }
    } else if (request.method === 'POST') {
      responseCode = 302;
      response.writeHead(responseCode, headers);
      response.end('\n');
    }
  });
};

