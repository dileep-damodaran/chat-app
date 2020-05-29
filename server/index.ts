
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

io.on('connection', (socket: any) => {

    socket.on('join', async (onboard_data: { un: string, rn: string }, callback: any) => {

        const un: string = onboard_data.un ? onboard_data.un.toLowerCase() : "";
        const rn: string = onboard_data.rn ? onboard_data.rn.toLowerCase() : "";

        try {

            let room = await Room.findOne({ name: rn });
            let user = await User.findOne({ user_name: un });

            if (!room) {
                room = await RoomService.createRoom(rn);
            }

            user = await UserService.addUser(socket.id, un);

            const inUser = { user_name: user.user_name, socket_id: user.socket_id, activity_log: [{ joined_at: new Date(), left_at: null }] };
            room.users = (room.users || []).concat([inUser]);

            room.markModified("users");
            await room.save();

            const message = new Message();
            message.room_id = room.id;
            message.user_id = 'admin';
            message.user_name = 'admin';
            message.message = `${user.user_name} has joined`;
            await message.save();


            const allMessages = await Message.find({ room_id: room.id }).sort({ created_at: 1.0 });

            const oldThreads = allMessages.map((thread) => {

                return {
                    user: thread.user_name,
                    text: thread.message
                }
            })

            socket.emit('admin-message', oldThreads);

            socket.broadcast.to(room.name).emit('admin-message', {
                user: 'admin',
                text: `${user.user_name} has joined`
            })


            socket.join(room.name);
            callback();
        }
        catch (err) {
            console.log(err);
        }


    });

    socket.on('send-message', async (socket_id: string, text: string, callback: any) => {

        const user = await UserService.getUser(socket_id);
        const room = await RoomService.getRoom(socket_id);

        const message = new Message();
        message.room_id = room.id;
        message.user_id = user.id;
        message.user_name = user.user_name;
        message.message = text
        await message.save();

        io.to(room.name).emit('admin-message', {
            user: user.user_name,
            text: text
        });

        callback();
    });


    socket.on('disconnect', (obj: any) => {
        console.log(`${obj.name} had left the room ${obj.room}!!`);
    });
})



server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});