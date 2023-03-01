import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Timestamp
 } from "typeorm"


 @Entity('schedules_users_properties')
 
export class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string

    // realEstateId
    // userId
 }

 