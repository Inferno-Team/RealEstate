import { createConnection } from "typeorm"
import { Permission } from "./Entities/Permissions"
import { RealState } from "./Entities/RealEstate"
import { RealStateRoom } from "./Entities/RealStateRoom"
import { RealStateRoomImage } from "./Entities/RealStateRoomImage"
import { User, UserLovedRealStates } from "./Entities/User"
import { UserRate } from "./Entities/UserRate"
import { UserType } from "./Entities/UserType"
import { UserTypePermissions } from "./Entities/UserTypePermissions"
import { Video360 } from "./Entities/Video360"


export const mysqlConnection = async () => {
    return await createConnection({
        type: "mysql",
        database: "real_state",
        username: "real_estate",
        password: "xR2k3l*Q*v)iv1Nb",
        logging: false,
        synchronize: false,
        entities: [User, UserType, UserTypePermissions, Permission,
            UserRate, RealState,
            RealStateRoom,
            RealStateRoomImage, Video360, 
            UserLovedRealStates]
    })
}

