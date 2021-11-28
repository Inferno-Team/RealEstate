"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video360Type = void 0;
const graphql_1 = require("graphql");
exports.Video360Type = new graphql_1.GraphQLObjectType({
    name: "Video360Type",
    fields: () => ({
        path: { type: graphql_1.GraphQLString }
    })
});
