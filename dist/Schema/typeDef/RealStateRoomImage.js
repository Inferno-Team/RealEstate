"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealStateRoomImageType = void 0;
const graphql_1 = require("graphql");
exports.RealStateRoomImageType = new graphql_1.GraphQLObjectType({
    name: "RealStateRoomImageType",
    fields: () => ({
        path: { type: graphql_1.GraphQLString }
    })
});
