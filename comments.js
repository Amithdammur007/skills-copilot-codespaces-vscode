// create web server
// 1. load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// 2. create web server
var server = http.createServer(function(request,response){
  // 2.1 get url
  var parsedUrl = url.parse(request.url);
  // 2.2 get path
  var resource = parsedUrl.pathname;
  // 2.3 get query string as an object
  var query = qs.parse(parsedUrl.query);
  // 2.4 get method
  var method = request.method;
  // 2.5 get message
});
  console.log('resource=',resource);
  console.log('method=',method);
  console.log('query=',query);
  // 2.6 set response header
  response.writeHead(200,{'Content-Type':'text/html'});
  // 2.7 write response body
  if(resource == '/'){
    fs.readFile('./comment.html','utf-8',function(err,data){
      if(err){
        response.statusCode = 404;
        response.end('404 not found');
      }else{
        response.end(data);
      }
    });
  }else if(resource == '/create'){
    if(method == 'POST'){
      var body = '';
      // 2.7.1 read request body
      request.on('data',function(data){
        body += data;
      });
      };
    };
      // 2.7.2 when finishing reading request body
      request.on('end',function(){
        var post = qs.parse(body);
        var name = post.name;
        var comment = post.comment;
        console.log('name=',name);
        console.log('comment=',comment);
      });
        //
