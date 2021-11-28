import { GraphQLObjectType } from "graphql";
import { RealState } from "../../Entities/RealEstate";
import { RealStateType } from "./RealState";


export const UserLovedRealStatesType = new GraphQLObjectType({
    name: "UserLovedReadStateType",
    fields: () => ({
        state: {
            type: RealStateType,
            async resolve(parent: any) {
                return await RealState.findOne({
                    relations: ['user'],
                    where: {
                        id: parent?.real_state_id
                    }
                })
            }
        }
    })
})