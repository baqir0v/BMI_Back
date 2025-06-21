import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/User.entity.";
import { FindOptionsWhere, Repository } from "typeorm";
import { PaginationUserDto } from "./dto/pagination-user.dto";
import { CreateUserDto } from "./dto/create_user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }

    findAll(params: PaginationUserDto) {
        return this.userRepo.find({
            take: params.limit || 10,
            skip: params.skip
        })
    }

    async findOne(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
        let user = await this.userRepo.findOne({ where })
        if (!user) {
            throw new NotFoundException("Usere not found")
        }
        return user
    }

    create(params: CreateUserDto) {
        const heightInMeters = params.height / 100; // Assuming height is in cm, converting to meters
        const bmi = (params.weight / (heightInMeters * heightInMeters)); // Perform the division first
        const roundedBmi = parseFloat(bmi.toFixed(2)); // Round to 2 decimal places

        const user = this.userRepo.create({ ...params, bmi: bmi })
        return this.userRepo.save(user)
    }

    async delete(id: number) {
        const user = await this.userRepo.findOne({ where: { id: id } })

        if (!user) throw new NotFoundException("User not found")

        await this.userRepo.remove(user)

        return user
    }
}