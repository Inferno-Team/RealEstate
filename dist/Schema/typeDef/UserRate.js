"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRateType = void 0;
const graphql_1 = require("graphql");
exports.UserRateType = new graphql_1.GraphQLObjectType({
    name: "User Rate Type",
    fields: () => ({
        rate: { type: graphql_1.GraphQLFloat }
    })
});
