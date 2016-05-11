var http = require('http');
var server = http.createServer(function(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}).listen(8085);
