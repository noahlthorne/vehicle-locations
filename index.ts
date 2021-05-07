import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', (socket) => {
    console.log('new connection...');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
