import * as mongoose from 'mongoose';
export declare class Db {
    static connect(): mongoose.Connection;
    private static mongooseInstance;
    private static mongooseConnection;
}
