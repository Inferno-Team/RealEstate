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
exports.ManagerStateType = exports.RealStateType = void 0;
const graphql_1 = require("graphql");
const RealStateRoom_1 = require("../../Entities/RealStateRoom");
const Video360_1 = require("../../Entities/Video360");
const RealStateRoom_2 = require("./RealStateRoom");
const User_1 = require("./User");
const Video360_2 = require("./Video360");
exports.RealStateType = new graphql_1.GraphQLObjectType({
    name: "RealEstateType",
    fields: () => ({
        location: { type: graphql_1.GraphQLString, },
        type: { type: graphql_1.GraphQLString },
        buy_type: { type: graphql_1.GraphQLString },
        log: { type: graphql_1.GraphQLFloat },
        lat: { type: graphql_1.GraphQLFloat },
        rate: { type: graphql_1.GraphQLFloat },
        budget: { type: graphql_1.GraphQLFloat },
        user: { type: User_1.ManagerDefType },
        rooms: {
            type: (0, graphql_1.GraphQLList)(RealStateRoom_2.RealStateRoomType),
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield RealStateRoom_1.RealStateRoom.find({
                        relations: ['realState', 'images'],
                        where: {
                            real_state_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        },
        video: {
            type: Video360_2.Video360Type,
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield Video360_1.Video360.findOne({
                        where: {
                            real_state_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        }
    })
});
exports.ManagerStateType = new graphql_1.GraphQLObjectType({
    name: "ManagerEstateType",
    fields: () => ({
        location: { type: graphql_1.GraphQLString, },
        type: { type: graphql_1.GraphQLString },
        buy_type: { type: graphql_1.GraphQLString },
        log: { type: graphql_1.GraphQLFloat },
        lat: { type: graphql_1.GraphQLFloat },
        rate: { type: graphql_1.GraphQLFloat },
        budget: { type: graphql_1.GraphQLFloat },
        // user: { type: ManagerStateType },
        rooms: {
            type: (0, graphql_1.GraphQLList)(RealStateRoom_2.RealStateRoomType),
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield RealStateRoom_1.RealStateRoom.find({
                        relations: ['realState', 'images'],
                        where: {
                            real_state_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        },
        video: {
            type: Video360_2.Video360Type,
            resolve(parent) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield Video360_1.Video360.findOne({
                        where: {
                            real_state_id: parent === null || parent === void 0 ? void 0 : parent.id
                        }
                    });
                });
            }
        }
    })
});
