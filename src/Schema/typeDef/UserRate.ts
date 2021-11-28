import { GraphQLFloat, GraphQLObjectType } from "graphql";

export const UserRateType = new GraphQLObjectType({
    name: "User Rate Type",
    fields: () => ({
        rate: { type: GraphQLFloat }
    })
})