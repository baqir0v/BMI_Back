import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class BMI extends CommonEntity{
    @Column()
    title:string
    @Column()
    range:string
    @Column()
    image:string
}