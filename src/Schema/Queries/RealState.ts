import { GraphQLList } from "graphql";
import { resolve } from "path/posix";
import { RealState } from "../../Entities/RealEstate";
import { RealStateType } from "../typeDef/RealState";


export const GET_USER_REAL_STATES = {
    type: GraphQLList(RealStateType),
    async resolve(parent: any, args: any, context: any) {
        const userId = context.userId;
        if (userId === undefined)
            return []
        return RealState.find({ where: { user_id: userId }, relations: ['user'] })
    }
}

export const GET_REAL_STATES = {
    type: GraphQLList(RealStateType),
    async resolve() {
        return await RealState.find();
    }
}