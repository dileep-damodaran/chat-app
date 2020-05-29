import { IRoomDocument } from "../../model/room/roomDocument";
export declare class RoomService {
    static createRoom(name: string): Promise<IRoomDocument>;
    static getRoom(socket_id: string): Promise<IRoomDocument>;
}
