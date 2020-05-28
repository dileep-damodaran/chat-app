"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
    room_id: { type: String, required: true, unique: true },
    user_id: { type: String, required: true, unique: true },
    message: { type: String, required: true, unique: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
messageSchema.index({ room_id: 1 });
exports.Message = mongoose.model("message", messageSchema);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RlbC9tZXNzYWdlL21lc3NhZ2VEb2N1bWVudFNjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVzc2FnZSA9IHZvaWQgMDtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbnZhciBtZXNzYWdlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgcm9vbV9pZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICB1c2VyX2lkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIG1lc3NhZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG59LCB7XG4gICAgdGltZXN0YW1wczogeyBjcmVhdGVkQXQ6ICdjcmVhdGVkX2F0JywgdXBkYXRlZEF0OiAndXBkYXRlZF9hdCcgfVxufSk7XG5tZXNzYWdlU2NoZW1hLmluZGV4KHsgcm9vbV9pZDogMSB9KTtcbmV4cG9ydHMuTWVzc2FnZSA9IG1vbmdvb3NlLm1vZGVsKFwibWVzc2FnZVwiLCBtZXNzYWdlU2NoZW1hKTtcbiJdLCJmaWxlIjoibW9kZWwvbWVzc2FnZS9tZXNzYWdlRG9jdW1lbnRTY2hlbWEuanMifQ==
