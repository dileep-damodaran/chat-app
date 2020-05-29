var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
require("dotenv").config();
import { Room } from './src/model/room/roomDocumentSchema.js';
import { User } from './src/model/user/userDocumentSchema.js';
import { Message } from './src/model/message/messageDocumentSchema.js';
import { RoomService } from './src/services/room/room.js';
import { UserService } from './src/services/user/user.js';
import { Db } from "./src/data/db.js";
Db.connect();
io.on('connection', (socket) => {
    socket.on('join', (onboard_data, callback) => __awaiter(void 0, void 0, void 0, function* () {
        const un = onboard_data.un ? onboard_data.un.toLowerCase() : "";
        const rn = onboard_data.rn ? onboard_data.rn.toLowerCase() : "";
        try {
            let room = yield Room.findOne({ name: rn });
            let user = yield User.findOne({ user_name: un });
            if (!room) {
                room = yield RoomService.createRoom(rn);
            }
            user = yield UserService.addUser(socket.id, un);
            const inUser = { user_name: user.user_name, socket_id: user.socket_id, activity_log: [{ joined_at: new Date(), left_at: null }] };
            room.users = (room.users || []).concat([inUser]);
            room.markModified("users");
            yield room.save();
            const allMessages = yield Message.find({ room_id: room.id }).sort({ created_at: -1.0 });
            const oldThreads = allMessages.map((thread) => {
                return {
                    user: thread.user_name,
                    text: thread.message
                };
            });
            socket.emit('display-old-threads', {
                threads: oldThreads
            });
            socket.emit('admin-message', {
                user: 'admin',
                text: `${user.user_name}, Welcome to the room ${room.name}`
            });
            socket.broadcast.to(room.name).emit('admin-message', {
                user: 'admin',
                text: `${user.user_name} has joined`
            });
            socket.join(room.name);
            callback();
        }
        catch (err) {
            console.log(err);
        }
    }));
    socket.on('send-message', (socket_id, text, callback) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield UserService.getUser(socket_id);
        const room = yield RoomService.getRoom(socket_id);
        const message = new Message();
        message.room_id = room.id;
        message.user_id = user.id;
        message.user_name = user.user_name;
        message.message = text;
        yield message.save();
        io.to(room.name).emit('admin-message', {
            user: user.user_name,
            text: text
        });
        callback();
    }));
    socket.on('disconnect', (obj) => {
        console.log(`${obj.name} had left the room ${obj.room}!!`);
    });
});
server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
