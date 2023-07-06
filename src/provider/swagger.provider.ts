import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { getPackage } from '@cc-heart/utils'
function generatorSwaggerConfig() {
  const pkg = getPackage()
  return new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build()
}

export function generatorSwaggerDocument(app: INestApplication) {
  const config = generatorSwaggerConfig()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
}
