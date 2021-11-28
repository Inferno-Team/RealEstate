"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Mutations/User");
const RealState_1 = require("./Queries/RealState");
const User_2 = require("./Queries/User");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        login: User_2.LOG_IN,
        getUserRate: User_2.GET_USER_RATE,
        getUser: User_2.GET_USER,
        getUserRealStates: RealState_1.GET_USER_REAL_STATES,
        getUserLovedStates: User_2.GET_USER_LOVED_STATES
    })
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
        register: User_1.RegisterUser
    })
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
