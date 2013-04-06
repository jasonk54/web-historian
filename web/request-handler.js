var http = require('http');
var query = require('querystring');
var url = require('url');
var fs = require('fs');

var message = [];
exports.datadir = __dirname + "/../data/sites.txt";

exports.handleRequest = function (request, response) {
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
  var message;
  headers['Content-Type'] = "text/html";

  request.on('data', function(chunk) {
    if (request.method === 'POST') {
      message = chunk.slice(4, chunk.length) + '\n';
    }
  });

  request.on('end', function() {
    var getPathname = url.parse(request.url).pathname;
    if (request.method === 'GET') {
      if (getPathname === '/') {
        response.writeHead(responseCode, headers);
        response.end(fs.readFileSync(__dirname + '/public/index.html'));
      } else if (getPathname === '/styles.css') {
        response.writeHead(responseCode, headers);
        response.end(fs.readFileSync(__dirname + '/public/styles.css'));
      } else if (getPathname.match(/www/)) {  // need to refactor this to only handle www requests
        response.writeHead(responseCode, headers);
        response.end(fs.readFileSync(__dirname + '/../data/sites' + getPathname));
      }
    } else if (request.method === 'POST' && getPathname === '/') {
      responseCode = 302;
      response.writeHead(responseCode, headers);
      var filecontents = fs.appendFileSync(exports.datadir, message);
      response.end(fs.readFileSync(exports.datadir, 'utf8')); //Need specify encoding type.  Running on older version
    }
  });
};