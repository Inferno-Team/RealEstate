import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class UserRate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number

    @Column()
    rate!: number

    @OneToOne(() => User, user => user.rate)
    @JoinColumn({ name: "user_id" })
    user!: User
}