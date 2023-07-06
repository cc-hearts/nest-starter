import { Module } from '@nestjs/common'
import { GlobalModule } from './global.module'

@Module({
  imports: [GlobalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
