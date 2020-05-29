"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
let userDocumentSchema = new mongoose.Schema({
    user_name: { type: String, required: true, unique: false },
    socket_id: { type: String, required: true, unique: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
userDocumentSchema.index({ user_name: 1, socket_id: 1 });
exports.User = mongoose.model("user", userDocumentSchema);
