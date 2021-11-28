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
exports.GET_USER_REAL_STATES = void 0;
const graphql_1 = require("graphql");
const RealEstate_1 = require("../../Entities/RealEstate");
const RealState_1 = require("../typeDef/RealState");
exports.GET_USER_REAL_STATES = {
    type: (0, graphql_1.GraphQLList)(RealState_1.RealStateType),
    resolve(parent, args, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = context.userId;
            if (userId === undefined)
                return [];
            return RealEstate_1.RealState.find({ where: { user_id: userId }, relations: ['user'] });
        });
    }
};
