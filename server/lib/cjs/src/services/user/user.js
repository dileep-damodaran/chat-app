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
exports.UserService = void 0;
const userDocumentSchema_js_1 = require("../../model/user/userDocumentSchema.js");
class UserService {
    static addUser(id, user_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                user_name = user_name.trim().toLowerCase();
                let user = new userDocumentSchema_js_1.User();
                user.user_name = user_name;
                user.socket_id = id;
                user = yield user.save();
                return resolve(user);
            }));
        });
    }
    static getUser(socket_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const user = yield userDocumentSchema_js_1.User.findOne({ socket_id: socket_id });
                if (!user)
                    return resolve();
                return resolve(user);
            }));
        });
    }
}
exports.UserService = UserService;
