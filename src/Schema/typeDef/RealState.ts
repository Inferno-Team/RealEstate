import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { resolve } from "path/posix";
import { RealState } from "../../Entities/RealEstate";
import { RealStateRoom } from "../../Entities/RealStateRoom";
import { User } from "../../Entities/User";
import { Video360 } from "../../Entities/Video360";
import { PairType } from "./Pair";
import { RealStateRoomType } from "./RealStateRoom";
import { ManagerDefType, UserDefType } from "./User";
import { Video360Type } from "./Video360";

export const RealStateType = new GraphQLObjectType({
    name: "RealEstateType",
    fields: () => ({
        location: { type: GraphQLString, },
        type: { type: GraphQLString },
        img_url: {
            type: GraphQLString,
            async resolve(parent: any) {
                const url = await RealState.findOne({
                    where: {
                        id: parent?.id
                    }
                })
                return "http://192.168.1.4/real_estate" + url?.img_url
            }
        },
        buy_type: { type: GraphQLString },
        log: { type: GraphQLFloat },
        lat: { type: GraphQLFloat },
        rate: { type: GraphQLFloat },
        budget: { type: GraphQLFloat },
        user: { type: ManagerDefType,
        async resolve(parent:any){
            return await User.findOne({
                where:{
                    id:parent?.user_id 
                }
            })
        } },
        rooms: {
            type: GraphQLList(RealStateRoomType),
            async resolve(parent: any) {
                return await RealStateRoom.find({
                    relations: ['realState', 'images'],
                    where: {
                        real_state_id: parent?.id
                    }
                })
            }
        },
        video: {
            type: Video360Type,
            async resolve(parent: any) {
                return await Video360.findOne({
                    where: {
                        real_state_id: parent?.id
                    }
                })
            }
        }
    })
})
export const ManagerStateType = new GraphQLObjectType({
    name: "ManagerEstateType",
    fields: () => ({
        location: { type: GraphQLString, },
        type: { type: GraphQLString },
        buy_type: { type: GraphQLString },
        log: { type: GraphQLFloat },
        lat: { type: GraphQLFloat },
        rate: { type: GraphQLFloat },
        budget: { type: GraphQLFloat },
        // user: { type: ManagerStateType },
        rooms: {
            type: GraphQLList(RealStateRoomType),
            async resolve(parent: any) {
                return await RealStateRoom.find({
                    relations: ['realState', 'images'],
                    where: {
                        real_state_id: parent?.id
                    }
                })
            }
        },
        video: {
            type: Video360Type,
            async resolve(parent: any) {
                return await Video360.findOne({
                    where: {
                        real_state_id: parent?.id
                    }
                })
            }
        }
    })
})
