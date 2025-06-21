import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsString, Length } from "class-validator";

export class CreateUserDto {
    @Type()
    @IsString()
    @Length(3, 50)
    @ApiProperty()
    name:string
    @Type()
    @IsString()
    @Length(3, 50)
    @ApiProperty()
    surname:string
    @Type()
    @IsBoolean()
    @ApiProperty()
    gender: boolean;
    @Type()
    @IsBoolean()
    @ApiProperty()
    age: number;
    @Type()
    @IsBoolean()
    @ApiProperty()
    height: number;
    @Type()
    @IsBoolean()
    @ApiProperty()
    weight: number;
}