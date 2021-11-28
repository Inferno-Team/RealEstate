import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";


export const MessageType = new GraphQLObjectType({
    name: "MessageType",
    fields: () => ({
        code: { type: GraphQLInt },
        msg: { type: GraphQLString },
        data: {type : GraphQLString }
    })
})