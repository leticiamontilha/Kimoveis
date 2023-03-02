import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    ManyToOne,
    JoinColumn
 } from "typeorm"
import { Address } from "./address.entity";
import { Category } from "./category.entity";

 @Entity('real_estate')
 
export class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "boolean", nullable: true, default: false})
    sold: boolean 

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({ type: "integer"})
    size: Number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @ManyToOne(() => Category)
    category: Category

    @OneToOne(() => Address)
    @JoinColumn()
    adress: Address
 }

 