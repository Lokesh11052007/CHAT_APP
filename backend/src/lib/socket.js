import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin : ["http://localhost:5173"],
    },
});

io.on("connection", (socket) => {
    console.log("New User Connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected: ", socket.id);
    });
});
console.log("Socket.io server initialized");

export { io, server, app };