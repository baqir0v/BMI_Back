import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from "./config/config";
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './Entities/User.entity.';
import { BmiModule } from './bmi/bmi.module';
import { BMI } from './Entities/Bmi.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: true,
        // entities: [`${__dirname}/**/*.entity.{ts,js}`],
        entities: [User,BMI],

      }),
    }),
    UserModule,
    BmiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
