import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BmiService } from "./bmi.service";
import { PaginationUserDto } from "src/user/dto/pagination-user.dto";
import { CreateBmiDto } from "./dto/create_bmi.dto";

@ApiTags("bmi")
@Controller("bmi")
export class BmiController {
    constructor(private bmiService: BmiService) { }

    @Get()
    findAll(@Query() params:PaginationUserDto){
        return this.bmiService.findAll(params)
    }

    @Get(":id")
    findOne(@Param("id") id:number){
        return this.bmiService.findOne({id})
    }

    @Post("create")
    create(@Body() body:CreateBmiDto){
        return this.bmiService.create(body)
    }
}