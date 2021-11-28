import { GraphQLObjectType, GraphQLString } from "graphql";


export const Video360Type = new GraphQLObjectType({
    name: "Video360Type",
    fields: () => ({
        path: { type: GraphQLString }
    })
})