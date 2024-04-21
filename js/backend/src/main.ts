import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(PORT, () => console.log(`Сервер успешно работает`));
}

start();
