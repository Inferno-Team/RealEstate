import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealState } from "./RealEstate";
import { UserRate } from "./UserRate";
import { UserType } from "./UserType";


@Entity() 
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: Number

    @Column()
    type_id!: number

    @Column()
    user_name!: String

    @Column()
    password!: String

    @Column()
    email!: String

    @Column()
    phone!: String

    @OneToOne(() => UserRate, rate => rate.user)
    rate!: UserRate

    @OneToMany(() => RealState, state => state.user)
    states!: RealState[]

    @OneToOne(() => UserType, type => type.user)
    @JoinColumn({ name: "type_id" })
    type!: UserType

    @OneToMany(() => UserLovedRealStates, states => states.user)
    loved_states!: UserLovedRealStates[]

}

@Entity()
export class UserLovedRealStates extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user_id!: number
    @Column()
    real_state_id!: number

    @ManyToOne(() => User, user => user.loved_states)
    @JoinColumn({ name: "user_id" })
    user!: User

    @ManyToOne(() => RealState, state => state.loved)
    @JoinColumn({ name: "real_state_id" })
    state!: RealState
}