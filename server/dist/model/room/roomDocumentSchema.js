"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var mongoose = require("mongoose");
var roomSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    users: {
        type: {
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
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
roomSchema.index({ name: 1, "users.socket_id": 1, "users.user_id": 1 });
exports.Room = mongoose.model("room", roomSchema);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RlbC9yb29tL3Jvb21Eb2N1bWVudFNjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUm9vbSA9IHZvaWQgMDtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbnZhciByb29tU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICB1c2Vyczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB1c2VyX2lkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIHNvY2tldF9pZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICAgICAgICAgIGFjdGl2aXR5X2xvZzoge1xuICAgICAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgam9pbmVkX2F0OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlZnRfYXQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IGZhbHNlLCB1bmlxdWU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICB9LCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiBmYWxzZVxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB7IGNyZWF0ZWRBdDogJ2NyZWF0ZWRfYXQnLCB1cGRhdGVkQXQ6ICd1cGRhdGVkX2F0JyB9XG59KTtcbnJvb21TY2hlbWEuaW5kZXgoeyBuYW1lOiAxLCBcInVzZXJzLnNvY2tldF9pZFwiOiAxLCBcInVzZXJzLnVzZXJfaWRcIjogMSB9KTtcbmV4cG9ydHMuUm9vbSA9IG1vbmdvb3NlLm1vZGVsKFwicm9vbVwiLCByb29tU2NoZW1hKTtcbiJdLCJmaWxlIjoibW9kZWwvcm9vbS9yb29tRG9jdW1lbnRTY2hlbWEuanMifQ==
