import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DbClass, dbschema } from './schema/Login.shema';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{
      name: DbClass.name, schema: dbschema
    }]),
    JwtModule.registerAsync({
      inject: [ConfigService], 
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h'},
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
