import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealState } from "./RealEstate";

@Entity()
export class Video360 extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    real_state_id!:number
    @Column()
    path!:string

    @OneToOne(()=>RealState , state=>state.video)
    @JoinColumn({name:"real_state_id"})
    realState!:RealState  
}