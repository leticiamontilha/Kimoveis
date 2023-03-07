import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
 } from "typeorm"
import { RealEstate } from "./realEstate.entity"


 @Entity('categories')
 
export class Category  {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true, length: 45})
    name: string 

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate[]
 }
