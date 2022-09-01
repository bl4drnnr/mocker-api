import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipe/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Mocker API')
    .setDescription('Mocker API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () =>
    console.log(`Server has been started on port ${PORT}`)
  );
}

bootstrap();
