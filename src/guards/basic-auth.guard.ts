import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class BasicAuth implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const b64auth = (request.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64auth, 'base64')
      .toString()
      .split(':');

    return (
      username === process.env.API_BASIC_AUTH_PASSWORD &&
      password === process.env.API_BASIC_AUTH_USERNAME
    );
  }
}
