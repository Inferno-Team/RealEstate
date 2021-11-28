import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { RealState } from "../../Entities/RealEstate";
import { UserType } from "../../Entities/UserType";
import { UserTypePermissions } from "../../Entities/UserTypePermissions";
import { ManagerStateType, RealStateType } from "./RealState";
import { UserTypePermissionsType } from "./UserTypePermissions";


export const UserDefType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        user_name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        type: {
            type: UserType_Type,
            async resolve(parent: any) {
                return await UserType.findOne({
                    where: {
                        id: parent?.type_id
                    }
                })
            }
        },
        states: {
            type: GraphQLList(ManagerStateType),
            async resolve(parent: any) {
                return await RealState.find({
                    where: {
                        user_id: parent?.id
                    }
                })
            }
        },
        phone: { type: GraphQLString },
    })
})
export const UserType_Type = new GraphQLObjectType({
    name: "UserType_Type",
    fields: () => ({
        type: { type: GraphQLString },
        permissions: {
            type: GraphQLList(UserTypePermissionsType),
            async resolve(parent: any) {
                return UserTypePermissions.find({
                    where: {
                        user_type_id: parent?.id
                    }
                })
            }
        }
    })
})

export const ManagerDefType = new GraphQLObjectType({
    name: "ManagerDefType",
    fields: () => ({
        id: { type: GraphQLID },
        user_name: { type: GraphQLString },
       
        email: { type: GraphQLString },
        type: {
            type: GraphQLString,
            async resolve(parent: any) {
                return (await UserType.findOne({
                    where: {
                        id: parent?.type_id
                    }
                }))?.type
            }
        },
        phone: { type: GraphQLString },
        states: {
            type: GraphQLList(ManagerStateType),
            async resolve(parent: any) {
                return await RealState.find({
                    where: {
                        user_id: parent?.id
                    }
                })
            }
        },
    })
})