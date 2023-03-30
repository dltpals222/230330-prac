import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path';

class Server {
  constructor(port) {
    this.port = port;
  }

  start(){
    http.createServer((req, res)=>{
      const parsedUrl = url.parse(req.url, true);
      const pathName = parsedUrl.pathname;
      const method = req.method;

      console.log(pathName)
      
      if(method === 'get' && pathName === '/'){
        this.handleGetRequest(req,res);
      } else if (method === 'post' && pathName === '/'){
        this.handlePostRequest(req, res);
      }
    }).listen(this.port, ()=> {
      console.log(`Server running on port ${this.port}`);
    })
  }
  
  handleGetRequest(req, res) {
    fs.readFile('index.html',(err,data) => {
      if (err) {
        res.writeHead(500, {'content-type':'text/html'});
        res.end('500 error 서버에 문제가 있습니다.');
      } else {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        res.end();
      }
    })
  }

  handlePostRequest(req, res) {
    let body = '';
    req.on('data',chunk => {
      body += chunk.toString();
    });
    req.on('end',()=>{
      console.log(body);
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`<h1>${body}</h1>`);
      res.end();
    })
  }
}

const server = new Server(2080);
server.start();