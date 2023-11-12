let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

let messages = [];
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
io.on('connection', function (socket) {
    for (let i in messages) {
        socket.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
});

server.listen(3000);