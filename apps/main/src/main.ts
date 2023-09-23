import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { generatorSwaggerDocument } from '../../../libs/provider/swagger.provider'
import { HttpInterceptor } from '../../../libs/interceptors/http.interceptor'
import { ExceptionFilters } from '../../../libs//exceptions/exception.filter'
import { AuthGuard } from '../../../libs/guards/auth.guard'
import { RedisService } from '../../../libs//provider/redis.provider'
import { getPort } from '../../../libs/utils/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  })

  generatorSwaggerDocument(app)

  app.useGlobalInterceptors(new HttpInterceptor())

  app.useGlobalPipes(new ValidationPipe())

  app.useGlobalFilters(new ExceptionFilters())

  app.useGlobalGuards(new AuthGuard(app.get(RedisService)))

  const port = getPort()

  await app.listen(port)
}

bootstrap()
