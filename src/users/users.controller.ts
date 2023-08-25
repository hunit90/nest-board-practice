import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

    return '회원가입 성공';
  }

  @UseGuards(AuthGuard())
  @Get('/')
  async getProfile(@Req() req: any) {
    const user = req.user;
    return user;
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
