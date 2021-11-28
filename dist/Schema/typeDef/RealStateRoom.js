"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealStateRoomType = void 0;
const graphql_1 = require("graphql");
const RealStateRoomImage_1 = require("./RealStateRoomImage");
exports.RealStateRoomType = new graphql_1.GraphQLObjectType({
    name: "RealStateRoomType",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        images: {
            type: (0, graphql_1.GraphQLList)(RealStateRoomImage_1.RealStateRoomImageType),
        }
    })
});
