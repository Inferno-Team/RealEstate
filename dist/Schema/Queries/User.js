"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.GET_USER_LOVED_STATES = exports.GET_USER_RATE = exports.GET_USER = exports.LOG_IN = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../../Entities/User");
const Message_1 = require("../typeDef/Message");
const User_2 = require("../typeDef/User");
const jsonwebtoken_1 = require("jsonwebtoken");
const const_1 = require("../../const");
const bcrypt = __importStar(require("bcrypt"));
const userLovedRealState_1 = require("../typeDef/userLovedRealState");
exports.LOG_IN = {
    type: Message_1.MessageType,
    args: {
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({
                where: {
                    email: args['email'],
                }
            });
            var password = user.password;
            const valid = bcrypt.compareSync(args['password'], password);
            if (user == undefined || user == null)
                return { code: 205, msg: "User Not Found", data: null };
            if (valid) {
                const _token = (0, jsonwebtoken_1.sign)({ id: user.id }, const_1.USER_ACCESS_TOKEN);
                console.log(_token);
                return { code: 200, msg: "User With password Found", data: _token };
            }
            else
                return { code: 209, msg: "Email and password doesn't add up", data: null };
        });
    }
};
exports.GET_USER = {
    type: User_2.UserDefType,
    resolve(_, __args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = context.userId;
            return yield User_1.User.findOne({ where: { id: userId } });
        });
    }
};
exports.GET_USER_RATE = {
    type: Message_1.MessageType,
    resolve(parent, args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = context.userId;
            if (userId === undefined) {
                return { code: 209, msg: "unvild token", data: null };
            }
            const user = yield User_1.User.findOne({
                where: { id: userId },
                relations: ['rate']
            });
            return { code: 200, msg: "found", data: `${user === null || user === void 0 ? void 0 : user.rate.rate}` };
        });
    }
};
exports.GET_USER_LOVED_STATES = {
    type: (0, graphql_1.GraphQLList)(userLovedRealState_1.UserLovedRealStatesType),
    resolve(parent, args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = context === null || context === void 0 ? void 0 : context.userId;
            if (userId === undefined)
                return [];
            const values = yield User_1.UserLovedRealStates.find({
                relations: ['state', 'user'],
                where: {
                    user_id: userId
                }
            });
            console.log(values);
            return values;
        });
    }
};
