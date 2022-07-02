import { Body, Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { UserEntity } from 'shared';
import { createUser, getUser } from './users.service';

@Route('api/users')
@Tags('Users')
export class UsersController extends Controller {
  @Get()
  public async getUser(
    @Query('email') email: string
  ): Promise<{ user: UserEntity | null }> {
    return getUser(email);
  }

  @Post()
  public async createUser(
    @Body() body: { email: string }
  ): Promise<{ user: UserEntity }> {
    return createUser(body.email);
  }
}
