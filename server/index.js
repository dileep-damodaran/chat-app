import 'http';
import 'express';
import socketio from 'socket.io';
import 'cors';

import {
    UserService
} from "./services/users/user";
const PORT = process.env.PORT || 5000;

// require("dotenv").config();
// require("dotenv-safe").load();

const app = express();
// app.use(router);
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {

    // socket.on('join', async({
    //     un,
    //     rn
    // }, callback) => {


    //     const result = await UserService.addUser(socket.id, un, rn);

    //     if (result.error)
    //         callback(result.error);

    //     const user = result.user;

    //     socket.emit('admin-message', {
    //         user: 'admin',
    //         text: `${user.user_name}, Welcome to the room ${rn}`
    //     });

    //     socket.broadcast.to(user.room).emit('admin-message', {
    //         user: 'admin',
    //         text: `${user.name} has joined`
    //     })


    //     socket.join(user.room);

    //     callback();
    // });

    // socket.on('send-message', (message, callback) => {

    //     const user = UserService.getUser(socket.id);

    //     const message = {
    //         room_id: string,
    //         user_id: socket_id,
    //         message: message
    //     }

    //     io.to(user.room).emit('admin-message', {
    //         user: user.user_name,
    //         text: message
    //     });

    //     callback();
    // });


    socket.on('disconnect', (obj) => {
        console.log(obj);
        console.log(`${obj.name} had left the room ${obj.room}!!`);
    });
})



server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});