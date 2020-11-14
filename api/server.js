// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;
const { v4: uuidv4 } = require('uuid');

const server = http.createServer();
const port = 8000;
server.listen(port);
const wsServer = new WebSocketServer({
    httpServer: server
});
console.log('Listening on port: ' + port)
wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    saveConnection({ id: uuidv4(), connection})
    connection.on('message', function(message) {
      console.log('Received Message:', message.utf8Data);
      connection.send('Hi this is WebSocket server!');
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});

const wsConnectionsArray = [];

const saveConnection = (connection) => {
  wsConnectionsArray.push(connection);
}

// TODO: add remove connection

setInterval(() => {
  wsConnectionsArray.forEach(con => {
    const value =  Math.floor(Math.random() * 101)
    con.connection.send(JSON.stringify({ value, timestamp: Date.now(), messageId: uuidv4()}))
  })
}, 1500)