import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this line allows use to serve our app on Heroku
  app.enableCors();
  await app.listen(process.env.PORT || 3002);
  // await app.listen(3002);

}
bootstrap();
