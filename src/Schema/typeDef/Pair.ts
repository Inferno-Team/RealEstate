import { GraphQLObjectType, GraphQLString } from "graphql";

export const PairType = new GraphQLObjectType({
    name: "Pair Type",
    fields: () => ({
        first: { type: GraphQLString },
        second: { type: GraphQLString },
    })
})