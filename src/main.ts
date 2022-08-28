import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/');
  app.enableCors();

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () =>
    console.log(`Server has been started on port ${PORT}`)
  );
}

bootstrap();
