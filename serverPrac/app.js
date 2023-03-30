import http from 'http'
import fs from 'fs'
import path, { resolve } from 'path'

function serveStaticFile(response, path, contenttype, responseCode){
  fs.readFile(path, function(err, data){
    if(err){
      response.writeHead(500,{'content-type' : 'text/plain'})
      response.end('505-Internet Error')
    } else {
      response.writeHead(responseCode, {'content-type' : contenttype})
      response.end(data)
    }
  })
} //serveStaticFile 함수 끝

const server = http.createServer(function(req, response){
  const url = req.url.toLowerCase();
  const urlSplit = req.url.toLowerCase().split('?')[0];
  const method = req.method;
  // console.log(url)
    switch (urlSplit) {
      case '/':
        serveStaticFile(response, path.join(resolve(),'server/index.html'),'text/html',200);
        break;
      case '/about':
        serveStaticFile(response, path.join(resolve(),'server/about.html'),'text/html',200);
        break;
      case '/contact':
        serveStaticFile(response, path.join(resolve(),'server/contact.html'),'text/html',200);
        break;
      default:
        serveStaticFile(response, path.join(resolve(),'server/404.html'),'text/html',404);
        console.log(url)
        break;
  
  
      case '/modules/tagmakecall.js':
        serveStaticFile(response, path.join(resolve(),'modules/tagMakeCall.js'),'text/javascript',200)
        break;
      case '/modules/tagmakefor.js':
        serveStaticFile(response, path.join(resolve(),'modules/tagMakeFor.js'),'text/javascript',200)
        break;
  
  
      case '/basehtml/index.js':
        serveStaticFile(response, path.join(resolve(),'basehtml/index.js'),'text/javascript',200)
        break;
      case '/basehtml/about.js':
        serveStaticFile(response, path.join(resolve(),'basehtml/about.js'),'text/javascript',200)
        break;
      case '/basehtml/contact.js':
        serveStaticFile(response, path.join(resolve(),'basehtml/contact.js'),'text/javascript',200)
        break;
      case '/basehtml/404.js':
        serveStaticFile(response, path.join(resolve(),'basehtml/404.js'),'text/javascript',200)
        break;
  
  
      case '/style.css':
        serveStaticFile(response, path.join(resolve(),'style.css'),'text/css',200)
        break;
      
    } //switch 끝

  // if(method = 'post' && url = '/about'){

  // }
})

server.listen(2123,function(){
  console.log('2123포트 정상작동중')
})