import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDTO } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() body: LoginDTO) {
        return this.authService.getTokens(body);
    }

    @Post('refresh')
    async refresh(@Body('refreshToken') token: string) {
        const payload = await this.authService.verifyRefreshToken(token);
        if (!payload) {
            return { error: 'Invalid refresh token' };
        }
        return this.authService.getTokens(payload.sub, payload.username);
    }
}
