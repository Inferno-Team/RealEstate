"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairType = void 0;
const graphql_1 = require("graphql");
exports.PairType = new graphql_1.GraphQLObjectType({
    name: "Pair Type",
    fields: () => ({
        first: { type: graphql_1.GraphQLString },
        second: { type: graphql_1.GraphQLString },
    })
});
