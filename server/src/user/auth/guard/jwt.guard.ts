import { ACCESS_STRATEGY_KEY } from '@constant';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard([ACCESS_STRATEGY_KEY]) {}
