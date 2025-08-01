import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DbClass, DbDocument } from './schema/Login.shema';
import { Model } from 'mongoose';
import { LoginDTO } from './dto';
import * as argon from 'argon2'

@Injectable()
export class AuthService {
    constructor(@InjectModel(DbClass.name) private SignModel: Model<DbDocument>) { }

    async SignIn(dto: LoginDTO) {
        try {
        const x = await new this.SignModel(dto).save()
        return { code: 200 };
        } catch (error) {
            if (error.code === 11000) {
                return { code : 500 }
            }
            throw error;
        }
    }
}