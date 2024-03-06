import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Route,
  Request,
  Security,
} from 'tsoa';
import userService from '../services/user';

type LoginDto = { email: string; password: string };

@Route('/user')
export class UserController extends Controller {
  @Security('jwt')
  @Get('profile')
  public async profile(@Request() req: any) {
    return {
      user: req.user,
    };
  }

  @Post('login')
  public async login(@Body() body: LoginDto) {
    const { email, password } = body;
    const token = await userService.getUserToken(email, password);
    return { data: token };
  }
}
