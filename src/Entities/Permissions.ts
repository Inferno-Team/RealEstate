import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserTypePermissions } from "./UserTypePermissions";


@Entity()
export class Permission extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @OneToMany(()=>UserTypePermissions , per=>per.permission)
    type_permissions!:UserTypePermissions[]
}