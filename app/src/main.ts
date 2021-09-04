import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Air quality')
    .setDescription("Données locales précises sur la qualité de l'air")
    .setVersion('1.0')
    .addTag('air')
    .build();
    const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}
bootstrap();
