import express from 'express';
import path from 'path';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', (socket) => {
    //Welcome current user
    socket.emit('message', 'welcome to Chat Cord!');
    //Broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joied the chat');

    //Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    // Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
