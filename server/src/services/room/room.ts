import {
    Room
} from "../../model/room/roomDocumentSchema";

export class RoomService {


    public async CreateRoom(name) {

        let room = await Room.FindOne({ name: name });

        if (!room) {
            room = new Room();
            room.name = name;
            await room.save();
        }

        return room;
    }
}