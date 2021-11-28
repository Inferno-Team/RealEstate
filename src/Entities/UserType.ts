import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { UserTypePermissions } from "./UserTypePermissions";


@Entity()
export class UserType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    type!: string
    

    @OneToOne(()=>User , user=>user.type)
    user!:User

    @OneToMany(()=>UserTypePermissions , type=>type.type)
    permissions!:UserTypePermissions[]
}