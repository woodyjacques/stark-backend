import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MailerModule } from "@nestjs-modules/mailer"
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { jwtConstants } from "./constants/jwt.constant";
import { mailerConfig } from "./mailer.config";
import { GoogleModule } from './google/google.module';
import { GoogleStrategy } from "./google/google.strategy";

@Module({
  imports: [
    MailerModule.forRoot(mailerConfig),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" },
    }),
    GoogleModule,
  ],
  controllers: [AuthController],
  providers: [AuthService,GoogleStrategy],
  exports: [MailerModule,AuthService]
})
export class AuthModule { }


