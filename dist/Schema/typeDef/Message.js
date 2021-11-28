"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = void 0;
const graphql_1 = require("graphql");
exports.MessageType = new graphql_1.GraphQLObjectType({
    name: "MessageType",
    fields: () => ({
        code: { type: graphql_1.GraphQLInt },
        msg: { type: graphql_1.GraphQLString },
        data: { type: graphql_1.GraphQLString }
    })
});
