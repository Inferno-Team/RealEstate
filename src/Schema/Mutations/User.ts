import { GraphQLString } from "graphql";
import { USER_ACCESS_TOKEN } from "../../const";
import { User } from "../../Entities/User";
import { MessageType } from "../typeDef/Message";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserType } from "../../Entities/UserType";
import { sign } from "jsonwebtoken"

export const RegisterUser = {
    type: MessageType,
    args: {
        user_name: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        type: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const type = args['type']
        const _type = await UserType.findOne({
            where:{
                type:type
            }
        })
        const type_id = _type?.id
        console.log(type_id);

        const salt = bcrypt.genSaltSync(10)
        const hash_pass = await bcrypt.hash(args['password'], salt)
        const user = User.create({
            user_name: args['user_name'],
            email: args['email'],
            password: hash_pass,
            type_id: type_id
        })
        await User.insert(user)

        var password = user!.password as string;

        const valid = bcrypt.compareSync(args['password'], password);

        if (valid) {
            const _token = sign({ id: user!.id }, USER_ACCESS_TOKEN)
            return { code: 200, msg: "User Created Successfully", data: _token }
        }
    }
}
