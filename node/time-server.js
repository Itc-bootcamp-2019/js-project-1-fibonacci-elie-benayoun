const net = require('net')
const server = net.createServer(function (socket) {
    let date=new Date();
  socket.write(`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:0${date.getMinutes()}`);
  socket.end();
})
server.listen(process.argv[2]);
