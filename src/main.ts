import { config as loadEnv } from 'dotenv-safe';
loadEnv();

import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';

import AppConfig from '@config/app';
import { AppModule } from '@modules/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());
  app.enableCors({ origin: AppConfig.APP_ORIGIN, credentials: true });
  await app.listen(AppConfig.APP_PORT);
}

bootstrap();
