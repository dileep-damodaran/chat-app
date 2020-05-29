"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose = require("mongoose");
let messageSchema = new mongoose.Schema({
    room_id: { type: String, required: true, unique: false },
    user_id: { type: String, required: true, unique: false },
    user_name: { type: String, required: true, unique: false },
    message: { type: String, required: true, unique: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
messageSchema.index({ room_id: 1 });
exports.Message = mongoose.model("message", messageSchema);
