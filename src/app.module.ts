import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.host,
      username: process.env.usernameDta,
      password: process.env.password,
      database: process.env.database,
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
      synchronize: false,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
