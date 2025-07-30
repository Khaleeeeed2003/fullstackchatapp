import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DbClass, dbschema } from './schema/Login.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{
    name:DbClass.name,schema:dbschema
  }])
],
  providers:[AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
