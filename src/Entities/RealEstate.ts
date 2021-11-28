import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealStateRoom } from "./RealStateRoom";
import { User, UserLovedRealStates } from "./User";
import { Video360 } from "./Video360";

@Entity()
export class RealState extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    log!: number
    @Column()
    lat!: number
    @Column()
    type!: string
    @Column()
    user_id!: number
    @Column()
    location!: string
    @Column()
    rate!: number
    @Column()
    buy_type!: string
    @Column()
    budget!: number

    @Column()
    img_url!:string

    @ManyToOne(() => User, user => user.states)
    @JoinColumn({ name: "user_id" })
    user!: User

    @OneToMany(() => RealStateRoom, room => room.realState)
    rooms!: RealStateRoom[]

    @OneToOne(() => Video360, video360 => video360.realState)
    video!: Video360


    @OneToMany(()=>UserLovedRealStates,loved =>loved.state)
    loved!:UserLovedRealStates[]
}