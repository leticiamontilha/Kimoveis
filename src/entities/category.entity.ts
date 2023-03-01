import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
 } from "typeorm"


 @Entity('categories')
 
export class Category  {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique: true, length: 45})
    name: string 
 }
