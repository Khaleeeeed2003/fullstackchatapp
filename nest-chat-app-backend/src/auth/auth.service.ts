import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DbClass, DbDocument } from './schema/Login.shema';
import { Model } from 'mongoose';
import { LoginDTO } from './dto';
import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(@InjectModel(DbClass.name) 
        private SignModel: Model<DbDocument>, 
        private jwtService: JwtService,
        private config: ConfigService,
    ) { }

    async SignIn(dto: LoginDTO) {
        try {

            dto.password = await argon.hash(dto.password)
            const x = await new this.SignModel(dto).save()
            return x;
        } catch (error) {
            if (error.code === 11000) {
                return false
            }
            throw error;
        }
    }

    async getTokens(dto:LoginDTO) {
        const account = this.SignIn(dto)
        if (account) {
            
        }
        const payload = { sub: userId, username };

        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.config.get('JWT_ACCESS_SECRET'),
            expiresIn: this.config.get('JWT_ACCESS_EXPIRES_IN'),
        });

        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET'),
            expiresIn: this.config.get('JWT_REFRESH_EXPIRES_IN'),
        });

        return { accessToken, refreshToken };
    }
    async verifyRefreshToken(token: string) {
        try {
            return await this.jwtService.verifyAsync(token, {
                secret: this.config.get('JWT_REFRESH_SECRET'),
            });
        } catch (e) {
            return null;
        }
    }
}