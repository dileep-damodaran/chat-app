"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
require("dotenv").config();
const roomDocumentSchema_js_1 = require("./src/model/room/roomDocumentSchema.js");
const userDocumentSchema_js_1 = require("./src/model/user/userDocumentSchema.js");
const messageDocumentSchema_js_1 = require("./src/model/message/messageDocumentSchema.js");
const room_js_1 = require("./src/services/room/room.js");
const user_js_1 = require("./src/services/user/user.js");
const db_js_1 = require("./src/data/db.js");
db_js_1.Db.connect();
io.on('connection', (socket) => {
    socket.on('join', (onboard_data, callback) => __awaiter(void 0, void 0, void 0, function* () {
        const un = onboard_data.un ? onboard_data.un.toLowerCase() : "";
        const rn = onboard_data.rn ? onboard_data.rn.toLowerCase() : "";
        try {
            let room = yield roomDocumentSchema_js_1.Room.findOne({ name: rn });
            let user = yield userDocumentSchema_js_1.User.findOne({ user_name: un });
            if (!room) {
                room = yield room_js_1.RoomService.createRoom(rn);
            }
            user = yield user_js_1.UserService.addUser(socket.id, un);
            const inUser = { user_name: user.user_name, socket_id: user.socket_id, activity_log: [{ joined_at: new Date(), left_at: null }] };
            room.users = (room.users || []).concat([inUser]);
            room.markModified("users");
            yield room.save();
            const message = new messageDocumentSchema_js_1.Message();
            message.room_id = room.id;
            message.user_id = 'admin';
            message.user_name = 'admin';
            message.message = `${user.user_name} has joined`;
            yield message.save();
            const allMessages = yield messageDocumentSchema_js_1.Message.find({ room_id: room.id }).sort({ created_at: 1.0 });
            const oldThreads = allMessages.map((thread) => {
                return {
                    user: thread.user_name,
                    text: thread.message
                };
            });
            socket.emit('admin-message', oldThreads);
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
        const user = yield user_js_1.UserService.getUser(socket_id);
        const room = yield room_js_1.RoomService.getRoom(socket_id);
        const message = new messageDocumentSchema_js_1.Message();
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
