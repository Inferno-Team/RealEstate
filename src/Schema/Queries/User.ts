import { GraphQLFloat, GraphQLList, GraphQLString } from "graphql";
import { User, UserLovedRealStates } from "../../Entities/User";
import { MessageType } from "../typeDef/Message";
import { UserDefType } from "../typeDef/User";
import { sign } from "jsonwebtoken"
import { USER_ACCESS_TOKEN } from "../../const";
import * as bcrypt from 'bcrypt';
import { UserRate } from "../../Entities/UserRate";
import { RealStateType } from "../typeDef/RealState";
import { resolve } from "path/posix";
import { RealState } from "../../Entities/RealEstate";
import { UserLovedRealStatesType } from "../typeDef/userLovedRealState";
export const LOG_IN = {
    type: MessageType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {

        const user = await User.findOne({
            where: {
                email: args['email'],
            }
        })
        if (user == undefined || user == null)
            return { code: 205, msg: "User Not Found", data: null }
            
        const password = user!.password as string;

        const valid = bcrypt.compareSync(args['password'], password);
        if (valid) {
            const _token = sign({ id: user!.id }, USER_ACCESS_TOKEN)
            
            return { code: 200, msg: "User With password Found", data: _token }
        }
        else return { code: 209, msg: "Email and password doesn't add up", data: null }
    }
}

export const GET_USER = {
    type: UserDefType,
    async resolve(_: any, __args: any, context: any) {
        const userId = context.userId;


        return await User.findOne({ where: { id: userId } })
    }
}


export const GET_USER_RATE = {
    type: MessageType,
    async resolve(parent: any, args: any, context: any) {
        const userId = context.userId;
        if (userId === undefined) {
            return { code: 209, msg: "unvild token", data: null }
        }
        const user = await User.findOne(
            {
                where: { id: userId },
                relations: ['rate']
            })

        return { code: 200, msg: "found", data: `${user?.rate.rate}` }
    }
}

export const GET_USER_LOVED_STATES = {
    type: GraphQLList(UserLovedRealStatesType),
    async resolve(parent: any, args: any, context: any) {
        const userId = context?.userId
        if (userId === undefined) return []
        const values = await UserLovedRealStates.find({
            relations: ['state', 'user'],
            where: {
                user_id: userId
            }
        })
        console.log(values);
        return values;

    }
}