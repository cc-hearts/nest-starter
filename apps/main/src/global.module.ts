import { Global, Module } from '@nestjs/common'
import { RedisService } from '../../../libs/provider/redis.provider'
import { DatabaseProvider } from '../../../libs/provider/dataBase.provider'
@Global()
@Module({
  providers: [...DatabaseProvider, RedisService],
  exports: [...DatabaseProvider, RedisService],
})
export class GlobalModule {}
