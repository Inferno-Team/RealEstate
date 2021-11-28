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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const graphql_1 = require("graphql");
const const_1 = require("../../const");
const User_1 = require("../../Entities/User");
const Message_1 = require("../typeDef/Message");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserType_1 = require("../../Entities/UserType");
exports.RegisterUser = {
    type: Message_1.MessageType,
    args: {
        user_name: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        type: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const type = args['type'];
            const type_id = (_a = (yield UserType_1.UserType.findOne({
                where: {
                    type: type
                }
            }))) === null || _a === void 0 ? void 0 : _a.id;
            console.log(type_id);
            const salt = bcrypt_1.default.genSaltSync(10);
            const hash_pass = yield bcrypt_1.default.hash(args['password'], salt);
            const user = User_1.User.create({
                user_name: args['user_name'],
                email: args['email'],
                password: hash_pass,
                type_id: type_id
            });
            yield User_1.User.insert(user);
            const token = jsonwebtoken_1.default.sign({ id: user.id }, const_1.USER_ACCESS_TOKEN);
            console.log(token);
            return { code: 200, msg: "created successfully", accessToken: token };
        });
    }
};
