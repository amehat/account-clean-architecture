import { Controller, Get } from "@nestjs/common";

import { Index } from 'infrastructure/nestjs/application/types';

@Controller()
export default class ApplicationController {
    @Get()
    index(): Index {
        return {
            service: 'account',
            version: '1.0.0'
        };
    }
}
