import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./Permissions";
import { UserType } from "./UserType";


@Entity()
export class UserTypePermissions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    user_type_id!: number
    @Column()
    permission_id!: number

    @ManyToOne(() => Permission, permission => permission.type_permissions)
    @JoinColumn({ name: "permission_id" })
    permission!: Permission

    @ManyToOne(() => UserType, permission => permission.permissions)
    @JoinColumn({ name: "user_type_id" })
    type!: UserType

}