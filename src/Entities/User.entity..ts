import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class User extends CommonEntity {
    @Column()
    name: string
    @Column()
    surname: string
    @Column()
    gender: boolean
    @Column()
    age: number
    @Column()
    height: number
    @Column()
    weight: number
    @Column("numeric",{default:0})
    bmi: number
}