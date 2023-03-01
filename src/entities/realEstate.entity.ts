import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
 } from "typeorm"


 @Entity('real_estate')
 
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "boolean", nullable: true, default: false})
    sold: boolean 

    @Column({type: "decimal"})
    value: string

    @Column({ type: "integer"})
    size: Number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
 }

 