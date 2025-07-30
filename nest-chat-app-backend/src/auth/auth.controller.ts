import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDTO } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
        constructor(private AuthService:AuthService){}


    @Post('signin')
    signIn(@Body() dto:LoginDTO){
        console.log('test');
        
       return this.AuthService.SignIn(dto)
        
    }
}
