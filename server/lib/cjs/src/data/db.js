"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const mongoose = require("mongoose");
const util = require("util");
class Db {
    static connect() {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        const connectionString = util.format(process.env.DB_URI, "chat-app");
        console.log("The connection string is " + connectionString);
        this.mongooseInstance = mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false });
        return this.mongooseInstance;
    }
}
exports.Db = Db;
