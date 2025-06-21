import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { PaginationUserDto } from "./dto/pagination-user.dto";
import { CreateUserDto } from "./dto/create_user.dto";

@ApiTags("user")
@Controller("user")
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    findAll(@Query() params: PaginationUserDto) {
        return this.userService.findAll(params)
    }

    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.userService.findOne({ id })
    }

    @Post("submit")
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Delete(":id")
    delete(@Param("id") id:number){
        return this.userService.delete(id)
    }
}