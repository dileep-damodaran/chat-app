// 'use strict';
import { Room } from "../../model/room/roomDocumentSchema";

// import { Room } from "../../model/room/roomDocumentSchema";



// class UserService {

//     public async addUser(id: string, name: string, room_name: string) {


//         name = name.trim().toLowerCase();
//         room_name = room_name.trim().toLowerCase();

//         const room = await Room.findOne({
//             name: room_name
//         });

//         if (room) {

//             let joinedUserDetail = room.users.find((user) => {
//                 return user.socket_id === id
//             });


//             if (!joinedUserDetail) {

//                 joinedUserDetail = {
//                     socket_id: id,
//                     user_name: name,
//                     activity_log: [{
//                         joined_at: new Date()
//                     }]
//                 }

//                 room.users.push(joinedUserDetail);
//             } else {

//             }

//             await room.save();
//             return {
//                 user: joinedUserDetail
//             };

//         } else {
//             return {
//                 error: "Room not available"
//             }
//         }
//     }


//     public static async getUser(id) {


//         const room = await Room.findOne({ "users.socket_io": id });

//         if (!room) return null;

//         return room.users.find((user) => {
//             return user.socket_id === id
//         });
//     }


// }

// module.exports = UserService;;



