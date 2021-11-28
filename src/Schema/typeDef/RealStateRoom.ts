import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { RealStateRoomImageType } from "./RealStateRoomImage";


export const RealStateRoomType = new GraphQLObjectType({
    name: "RealStateRoomType",
    fields: () => ({
        name: { type: GraphQLString },
        images:{
            type:GraphQLList(RealStateRoomImageType),
        }
    })
})