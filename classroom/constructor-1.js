import http from 'http'

class Server {
  constructor(port) {
    this.port = port;
  } //constructor 끝
  set port(value){
    if(typeof value !== 'number'){
      throw new Error('port must be a number');
    } else {
      this._port = value;
    }
  }//ser port 끝


  start(){
    this.server = http.createServer((request, response) => {
      response.writeHead(200, {'content-type' : 'text/plain charset=utf-8'})
      response.end('객체지향 프로그래밍의 시작 생성자 함수','utf-8')
    });
    this.server.listen(this._port);
  } //start 끝
} //class server 끝

const server = new Server(3000);
server.start();
