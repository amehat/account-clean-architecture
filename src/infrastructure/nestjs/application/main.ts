import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import ApplicationModule from "infrastructure/nestjs/application/application.module";

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3000);
    Logger.log('Application is running on port: 3000');
}
bootstrap();
