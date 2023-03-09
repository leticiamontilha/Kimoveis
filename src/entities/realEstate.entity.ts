import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    ManyToOne,
    JoinColumn,
    OneToMany
 } from "typeorm"
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

 @Entity('real_estate')
 
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "boolean", nullable: true, default: false})
    sold: boolean 

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({ type: "integer"})
    size: Number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @ManyToOne(() => Category)
    category: Category

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]
 }

 