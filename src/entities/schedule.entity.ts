import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
 } from "typeorm"


 @Entity('schedules_users_properties')
 
export class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string
 }
