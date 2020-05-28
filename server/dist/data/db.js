"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
var mongoose = require("mongoose");
var util = require("util");
var Db = /** @class */ (function () {
    function Db() {
    }
    Db.connect = function () {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("connected to the database");
        });
        var connectionString = util.format(process.env.DB_URI, "chat-application");
        console.log("The connection string is " + connectionString);
        this.mongooseInstance = mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false });
        return this.mongooseInstance;
    };
    return Db;
}());
exports.Db = Db;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkYXRhL2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EYiA9IHZvaWQgMDtcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG52YXIgRGIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGIoKSB7XG4gICAgfVxuICAgIERiLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vbmdvb3NlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbmdvb3NlSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25nb29zZUNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLm1vbmdvb3NlQ29ubmVjdGlvbi5vbmNlKFwib3BlblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2VcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29ubmVjdGlvblN0cmluZyA9IHV0aWwuZm9ybWF0KHByb2Nlc3MuZW52LkRCX1VSSSwgXCJjaGF0LWFwcGxpY2F0aW9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb25uZWN0aW9uIHN0cmluZyBpcyBcIiArIGNvbm5lY3Rpb25TdHJpbmcpO1xuICAgICAgICB0aGlzLm1vbmdvb3NlSW5zdGFuY2UgPSBtb25nb29zZS5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9uZ29vc2VJbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBEYjtcbn0oKSk7XG5leHBvcnRzLkRiID0gRGI7XG4iXSwiZmlsZSI6ImRhdGEvZGIuanMifQ==
