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
exports.UserTypePermissionsType = void 0;
const graphql_1 = require("graphql");
const Permissions_1 = require("../../Entities/Permissions");
exports.UserTypePermissionsType = new graphql_1.GraphQLObjectType({
    name: "UserTypePermissionType",
    fields: () => ({
        permission: {
            type: graphql_1.GraphQLString,
            resolve(parent) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    return (_a = (yield Permissions_1.Permission.findOne({
                        where: {
                            id: parent === null || parent === void 0 ? void 0 : parent.permission_id
                        }
                    }))) === null || _a === void 0 ? void 0 : _a.name;
                });
            }
        }
    })
});
