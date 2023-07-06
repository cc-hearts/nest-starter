import { Global, Module } from '@nestjs/common'
import { RedisService } from './provider/redis.provider'
import { DatabaseProvider } from './provider/dataBase.provider'
@Global()
@Module({
  providers: [...DatabaseProvider, RedisService],
  exports: [...DatabaseProvider, RedisService],
})
export class GlobalModule {}
