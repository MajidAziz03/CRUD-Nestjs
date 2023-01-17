import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}
