
//모듈 추출
var http = require('http');

//웹서버 만들고 실행
http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World!</h1>');

}).listen(52273, function(){ //콜백
  console.log('Server running at http://127.0.0.1:52273/')
});
