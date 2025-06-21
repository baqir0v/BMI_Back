import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entities/User.entity.";
import { BmiController } from "./bmi.controller";
import { BmiService } from "./bmi.service";
import { BMI } from "src/Entities/Bmi.entity";

@Module({
    imports:[TypeOrmModule.forFeature([BMI])],
    controllers:[BmiController],
    providers:[BmiService],
    exports:[],
})
export class BmiModule{}