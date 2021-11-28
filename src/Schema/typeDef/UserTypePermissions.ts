import { GraphQLObjectType, GraphQLString } from "graphql";
import { Permission } from "../../Entities/Permissions";


export const UserTypePermissionsType = new GraphQLObjectType({
    name: "UserTypePermissionType",
    fields: () => ({
        permission: {
            type: GraphQLString,
            async resolve(parent: any) {
                return (await Permission.findOne({
                    where: {
                        id: parent?.permission_id
                    }
                }))?.name
            }
        }
    })
})