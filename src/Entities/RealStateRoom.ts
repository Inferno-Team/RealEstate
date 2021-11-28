import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealState } from "./RealEstate";
import { RealStateRoomImage } from "./RealStateRoomImage";


@Entity()
export class RealStateRoom extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    real_state_id!: number

    @Column()
    name!: string

    @ManyToOne(() => RealState, state => state.rooms)
    @JoinColumn({ name: "real_state_id" })
    realState!: RealState

    @OneToMany(() => RealStateRoomImage, images => images.room)
    images!: RealStateRoomImage[]
}