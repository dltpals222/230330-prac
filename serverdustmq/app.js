import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path';

class Server {
  constructor(port){
    this.port = port
  }

  start(){
    http.createServer((req, res) => {
      const reqUrl = url.parse(req.url,true);
      const pathName = reqUrl.pathname;
      const method = req.method;

      if(pathName === '/' && method === 'get'){
        fs.readFile('/index.html',err => { 
          if(err){
            res.writeHead(500, {'content-type':'text/plain'})
            res.wirte('500 서버에 문제가 있습니다.')
            res.end(console.log('500 서버에 문제가 있습니다.'))
          } else {
            res.writeHead(200, {'content-type':'text/html'})
            
          }
        })
        res.writeHead(200,{'content-type':'text/html'})
        res.end(console.log(`${this.port} 가 정상작동합니다`))
      } else if(pathName === '/' && method === 'post') {
        let body = '';
      }

    })
    console.dir(reqUrl)
  }
  
}
