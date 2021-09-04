import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Air quality')
    .setDescription("Air Quality and weather around you. If you want test you need get ApiKey or send me email to e.tokiniaina@gmail.com")
    .setVersion('1.0')
    .addTag('air')
    .build();
    const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}
bootstrap();
