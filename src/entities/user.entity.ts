import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
 } from "typeorm"


 @Entity('users')
 
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 45})
    name: string 

    @Column({length: 45, unique: true})
    email: string

    @Column({type: "boolean", nullable: true, default: false})
    admin: boolean

    @Column({length: 120})
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string 

    @DeleteDateColumn()
    deletedAt: string
 }

 