import { IsEmail, IsString, Length } from 'class-validator';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AuthDto {
  export class SignUp {
    @IsEmail()
    email: string;

    @IsString()
    @Length(4, 20)
    password: string;

    @IsString()
    username: string;
  }

  export class SignIn {
    @IsEmail()
    email: string;

    @IsString()
    @Length(4, 20)
    password: string;
  }
}
