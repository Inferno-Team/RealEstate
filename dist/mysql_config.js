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
exports.mysqlConnection = void 0;
const typeorm_1 = require("typeorm");
const Permissions_1 = require("./Entities/Permissions");
const RealEstate_1 = require("./Entities/RealEstate");
const RealStateRoom_1 = require("./Entities/RealStateRoom");
const RealStateRoomImage_1 = require("./Entities/RealStateRoomImage");
const User_1 = require("./Entities/User");
const UserRate_1 = require("./Entities/UserRate");
const UserType_1 = require("./Entities/UserType");
const UserTypePermissions_1 = require("./Entities/UserTypePermissions");
const Video360_1 = require("./Entities/Video360");
const mysqlConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, typeorm_1.createConnection)({
        type: "mysql",
        database: "real_state",
        username: "real_estate",
        password: "xR2k3l*Q*v)iv1Nb",
        logging: false,
        synchronize: true,
        entities: [User_1.User, UserType_1.UserType, UserTypePermissions_1.UserTypePermissions, Permissions_1.Permission,
            UserRate_1.UserRate, RealEstate_1.RealState,
            RealStateRoom_1.RealStateRoom,
            RealStateRoomImage_1.RealStateRoomImage, Video360_1.Video360,
            User_1.UserLovedRealStates]
    });
});
exports.mysqlConnection = mysqlConnection;
