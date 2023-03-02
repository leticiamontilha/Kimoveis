import { getRounds, hashSync } from "bcryptjs"
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate
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
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date 

    @DeleteDateColumn()
    deletedAt: Date

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

 }

 