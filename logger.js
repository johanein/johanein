
// var x=;
// console.log(__filename)
// console.log(__dirname)
// var url ='http://mylogger.io/log';

// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// function log(message){
//     console.log(message);
    
// emitter.emit('messageLogged',{id:1,url:'http://'});
// }

const EventEmitter = require('events');

class Logger extends EventEmitter{
     log(message){
        console.log(message);
        
    this.emit('messageLogged',{id:1,url:'http://'});
    }
}


module.exports = Logger;