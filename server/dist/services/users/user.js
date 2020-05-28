// 'use strict';
var Room = require("../../model/room/roomDocumentSchema.ts");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy91c2Vycy91c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2Ugc3RyaWN0JztcbnZhciBSb29tID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL3Jvb20vcm9vbURvY3VtZW50U2NoZW1hLnRzXCIpO1xuLy8gaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbC9yb29tL3Jvb21Eb2N1bWVudFNjaGVtYVwiO1xuLy8gY2xhc3MgVXNlclNlcnZpY2Uge1xuLy8gICAgIHB1YmxpYyBhc3luYyBhZGRVc2VyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcm9vbV9uYW1lOiBzdHJpbmcpIHtcbi8vICAgICAgICAgbmFtZSA9IG5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4vLyAgICAgICAgIHJvb21fbmFtZSA9IHJvb21fbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbi8vICAgICAgICAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZE9uZSh7XG4vLyAgICAgICAgICAgICBuYW1lOiByb29tX25hbWVcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIGlmIChyb29tKSB7XG4vLyAgICAgICAgICAgICBsZXQgam9pbmVkVXNlckRldGFpbCA9IHJvb20udXNlcnMuZmluZCgodXNlcikgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnNvY2tldF9pZCA9PT0gaWRcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgaWYgKCFqb2luZWRVc2VyRGV0YWlsKSB7XG4vLyAgICAgICAgICAgICAgICAgam9pbmVkVXNlckRldGFpbCA9IHtcbi8vICAgICAgICAgICAgICAgICAgICAgc29ja2V0X2lkOiBpZCxcbi8vICAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiBuYW1lLFxuLy8gICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eV9sb2c6IFt7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWRfYXQ6IG5ldyBEYXRlKClcbi8vICAgICAgICAgICAgICAgICAgICAgfV1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgcm9vbS51c2Vycy5wdXNoKGpvaW5lZFVzZXJEZXRhaWwpO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGF3YWl0IHJvb20uc2F2ZSgpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICB1c2VyOiBqb2luZWRVc2VyRGV0YWlsXG4vLyAgICAgICAgICAgICB9O1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICBlcnJvcjogXCJSb29tIG5vdCBhdmFpbGFibGVcIlxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0VXNlcihpZCkge1xuLy8gICAgICAgICBjb25zdCByb29tID0gYXdhaXQgUm9vbS5maW5kT25lKHsgXCJ1c2Vycy5zb2NrZXRfaW9cIjogaWQgfSk7XG4vLyAgICAgICAgIGlmICghcm9vbSkgcmV0dXJuIG51bGw7XG4vLyAgICAgICAgIHJldHVybiByb29tLnVzZXJzLmZpbmQoKHVzZXIpID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiB1c2VyLnNvY2tldF9pZCA9PT0gaWRcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuLy8gbW9kdWxlLmV4cG9ydHMgPSBVc2VyU2VydmljZTs7XG4iXSwiZmlsZSI6InNlcnZpY2VzL3VzZXJzL3VzZXIuanMifQ==
