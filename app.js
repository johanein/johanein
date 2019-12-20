// function sayHello(name) {
    // console.log(module);
// }

// sayHello(' Albert');
// console.log(window);

// const log = require('./logger')
 
// log('Albert')

// const path = require('path')
// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os')
// const total=os.totalmem()
// const free = os.freemem()
// console.log(total)
// console.log(free)

// const fs = require('fs')
// const read = fs.readdirSync('./')
// console.log(read)

// fs.readdir('./',function(err,result){
//     if(err) console.log('Error',err);
//     else console.log('result',result);
// })

// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('messageLogged', (arg) =>{
//     console.log('Listener called', arg);
// })

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) =>{
//     console.log('Listener called', arg);
// })

// logger.log('message')



const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
res.write('Hello World');
res.end();
    }
    if(req.url==='/albert'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
            }

})


// server.on('connection',(socket)=>{
//     console.log('new connection')
// });

server.listen(3001);

console.log('listening on port 3001...');