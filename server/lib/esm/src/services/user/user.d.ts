import { IUserDocument } from "../../model/user/userDocument.js";
export declare class UserService {
    static addUser(id: string, user_name: string): Promise<IUserDocument>;
    static getUser(socket_id: string): Promise<IUserDocument>;
}
