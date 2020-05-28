"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose = require("mongoose");
var userDocumentSchema = new mongoose.Schema({
    user_name: { type: String, required: true, unique: true },
    socket_id: { type: String, required: true, unique: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});
userDocumentSchema.index({ user_name: 1, socket_id: 1 });
exports.User = mongoose.model("user", userDocumentSchema);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RlbC91c2VyL3VzZXJEb2N1bWVudFNjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbnZhciB1c2VyRG9jdW1lbnRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1c2VyX25hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgc29ja2V0X2lkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxufSwge1xuICAgIHRpbWVzdGFtcHM6IHsgY3JlYXRlZEF0OiAnY3JlYXRlZF9hdCcsIHVwZGF0ZWRBdDogJ3VwZGF0ZWRfYXQnIH1cbn0pO1xudXNlckRvY3VtZW50U2NoZW1hLmluZGV4KHsgdXNlcl9uYW1lOiAxLCBzb2NrZXRfaWQ6IDEgfSk7XG5leHBvcnRzLlVzZXIgPSBtb25nb29zZS5tb2RlbChcInVzZXJcIiwgdXNlckRvY3VtZW50U2NoZW1hKTtcbiJdLCJmaWxlIjoibW9kZWwvdXNlci91c2VyRG9jdW1lbnRTY2hlbWEuanMifQ==
