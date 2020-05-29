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
exports.RoomService = void 0;
const roomDocumentSchema_1 = require("../../model/room/roomDocumentSchema");
class RoomService {
    static createRoom(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let room = new roomDocumentSchema_1.Room();
                room.name = name;
                yield room.save();
                return resolve(room);
            }));
        });
    }
    static getRoom(socket_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const room = yield roomDocumentSchema_1.Room.findOne({ "users.socket_id": socket_id });
                if (!room)
                    return resolve();
                return resolve(room);
            }));
        });
    }
}
exports.RoomService = RoomService;
