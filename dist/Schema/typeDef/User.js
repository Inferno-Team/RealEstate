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
exports.ManagerDefType = exports.UserType_Type = exports.UserDefType = void 0;
const graphql_1 = require("graphql");
const RealEstate_1 = require("../../Entities/RealEstate");
const UserType_1 = require("../../Entities/UserType");
const UserTypePermissions_1 = require("../../Entities/UserTypePermissions");
const RealState_1 = require("./RealState");
const UserTypePermissions_2 = require("./UserTypePermissions");
exports.UserDefType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        user_name: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        type: {
            type: exports.UserType_Type,
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield UserType_1.UserType.findOne({
                        where: {
                            id: parent === null || parent === void 0 ? void 0 : parent.type_id
                        }
                    });
                });
            }
        },
        states: {
            type: (0, graphql_1.GraphQLList)(RealState_1.ManagerStateType),
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield RealEstate_1.RealState.find({
                        where: {
                            user_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        },
        phone: { type: graphql_1.GraphQLString },
    })
});
exports.UserType_Type = new graphql_1.GraphQLObjectType({
    name: "UserType_Type",
    fields: () => ({
        type: { type: graphql_1.GraphQLString },
        permissions: {
            type: (0, graphql_1.GraphQLList)(UserTypePermissions_2.UserTypePermissionsType),
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return UserTypePermissions_1.UserTypePermissions.find({
                        where: {
                            user_type_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        }
    })
});
exports.ManagerDefType = new graphql_1.GraphQLObjectType({
    name: "ManagerDefType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        user_name: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        type: {
            type: exports.UserType_Type,
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield UserType_1.UserType.findOne({
                        where: {
                            id: parent === null || parent === void 0 ? void 0 : parent.type_id
                        }
                    });
                });
            }
        },
        phone: { type: graphql_1.GraphQLString },
        states: {
            type: (0, graphql_1.GraphQLList)(RealState_1.ManagerStateType),
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield RealEstate_1.RealState.find({
                        where: {
                            user_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        },
    })
});
