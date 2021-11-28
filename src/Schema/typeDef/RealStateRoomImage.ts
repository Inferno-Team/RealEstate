import { GraphQLObjectType, GraphQLString } from "graphql";


export const RealStateRoomImageType = new GraphQLObjectType({
    name: "RealStateRoomImageType",
    fields: () => ({
        path: { type: GraphQLString }
    })
})