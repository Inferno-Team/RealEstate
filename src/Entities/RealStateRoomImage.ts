import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealStateRoom } from "./RealStateRoom";


@Entity()
export class RealStateRoomImage extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    real_state_room_id!: number

    @Column()
    path!: string

    @ManyToOne(() => RealStateRoom, room => room.images)
    @JoinColumn({ name: "real_state_room_id" })
    room!: RealStateRoom
}