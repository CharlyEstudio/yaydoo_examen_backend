import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

const logger: Logger = new Logger('YayDoo | API RESTFul');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger API
  const config = new DocumentBuilder()
    .setTitle('YayDoo API')
    .setDescription(
      'Documentación oficial para el uso y manejo de la API de YayDoo',
    )
    .setVersion('1.0.0')
    .addTag('users')
    .addTag('auth')
    .addTag('persons')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(AppModule.port, AppModule.host);
  logger.debug(`Service Start in the port ${AppModule.port}`);
}
bootstrap();
