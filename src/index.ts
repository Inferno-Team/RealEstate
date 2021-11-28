import express from "express"
import {graphqlHTTP} from "express-graphql"
import cors from "cors"
import { createConnection } from "typeorm"
import { mysqlConnection } from "./mysql_config"
import { schema } from "./Schema"
import { verify } from "jsonwebtoken"
import { USER_ACCESS_TOKEN } from "./const"
import { Interface } from "readline"
import { getSystemErrorMap } from "util"

const main = async () => {

    await mysqlConnection();
    //  restFul api

    const app = express()
    app.use((req, _, next) => {
        const token = req.header('authorization')?.split(' ')[1]
        const bearer = req.header('authorization')?.split(' ')[0]

        if (token === undefined || token === null || bearer != 'Bearer') {
            next()
            return;
        }
        const user = verify(token!, USER_ACCESS_TOKEN) as any
        (req as any).userId = user.id
        next()
    })
    app.use(cors())
    app.use(express.json())
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    }))
    app.listen(3001, () => {
        console.log("Server is running.")
    })
}

main().catch(err =>
    console.log(err)
);

