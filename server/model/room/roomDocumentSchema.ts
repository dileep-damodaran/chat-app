// import { IRoomDocument } from "./roomDocument";

const IRoomDocument = require("./roomDocument");
import * as mongoose from "mongoose";

let roomSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    users: {
        type:
        {
            user_id: { type: String, required: true, unique: false },
            socket_id: { type: String, required: true, unique: true },
            activity_log: {
                type: {
                    joined_at: { type: Date, required: true, unique: false },
                    left_at: { type: Date, required: false, unique: false }
                }, required: true, unique: false
            }
        }, required: true, unique: false
    }
},
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

roomSchema.index({ name: 1, "users.socket_id": 1, "users.user_id": 1 });
export let Room: mongoose.Model<IRoomDocument> = mongoose.model<IRoomDocument>("room", roomSchema);


