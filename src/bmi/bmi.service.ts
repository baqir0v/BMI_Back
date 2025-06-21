import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BMI } from "src/Entities/Bmi.entity";
import { PaginationUserDto } from "src/user/dto/pagination-user.dto";
import { FindOptionsWhere, Repository } from "typeorm";
import { CreateBmiDto } from "./dto/create_bmi.dto";

@Injectable()
export class BmiService {
    constructor(
        @InjectRepository(BMI)
        private bmiRepo: Repository<BMI>
    ) { }

    findAll(params: PaginationUserDto) {
        return this.bmiRepo.find({
            take: params.limit || 11,
            skip: params.skip,
        })
    }

    async findOne(where: FindOptionsWhere<BMI> | FindOptionsWhere<BMI>) {
        let bmi = await this.bmiRepo.findOne({ where })
        if (!bmi) {
            throw new NotFoundException("BMI not found")
        }
        return bmi
    }

    create(params: CreateBmiDto) {
        const bmi = this.bmiRepo.create(params)
        return this.bmiRepo.save(bmi)
    }
}