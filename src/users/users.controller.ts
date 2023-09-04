import {
  Controller,
  Post,
  Body,
  ConflictException,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthDto } from '../auth/dto/authDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signup(@Body() authDTO: AuthDto.SignUp) {
    const { email, username } = authDTO;

    const hasEmail = await this.usersService.findByEmail(email);
    if (hasEmail) {
      throw new ConflictException('이미 사용중인 이메일입니다.');
    }

    const userEntity = await this.usersService.create(authDTO);

    return userEntity;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getProfile(@Req() req: any) {
    const user = req.user;
    return user;
  }
}
