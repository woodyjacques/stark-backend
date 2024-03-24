import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from "bcryptjs";

@Injectable()
export class GoogleService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async googleLogin(req) {

    const name = req.user.firstName;
    const email = req.user.email;
    const password = "hola";
    const isVerified = true;

    let user = await this.usersService.findOneByEmail(email);
    let token;

    if (!user) {
      const hashedPassword = await bcryptjs.hash(password, 10);
      user = await this.saveUser({ name, email, password: hashedPassword, isVerified });
    }

    token = await this.generateToken(user);

    return {
      token: token,
      name: user.name,
      email: user.email
    };
  }

  private async saveUser({ name, email, password, isVerified }) {
    return this.usersService.create({
      name,
      email,
      password,
      isVerified,
    });
  }

  private async generateToken(user): Promise<string> {
    const payload = { email: user.email, name: user.name };
    return this.jwtService.signAsync(payload);
  }

}
