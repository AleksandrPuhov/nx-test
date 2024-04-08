import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const CORS_ORIGINS = configService.get('CORS_ORIGINS') || 'http://localhost:3000'
  // const corsOrigins = CORS_ORIGINS.split(',')

  app.enableCors({
    // origin: corsOrigins,
    credentials: true,
    exposedHeaders: ['Content-Type', 'Content-Disposition']
  });

  const config = new DocumentBuilder()
    .setTitle('test nest docs')
    .setDescription('api for test')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.NEST_PORT || 3001;

  await app.listen(port);
}

bootstrap();
