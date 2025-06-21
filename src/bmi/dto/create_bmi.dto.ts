import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class CreateBmiDto {
    @Type()
    @IsString()
    @ApiProperty()
    title: string
    @Type()
    @IsString()
    @ApiProperty()
    range: string
    @Type()
    @IsString()
    @ApiProperty()
    image: string
}