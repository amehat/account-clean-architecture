import { Module } from "@nestjs/common";

import ApplicationController from "infrastructure/nestjs/application/application.controller";

@Module({
    controllers: [ApplicationController],
})
export default class ApplicationModule {}
