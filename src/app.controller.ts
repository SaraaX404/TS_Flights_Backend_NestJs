import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // tslint:disable-next-line:no-empty
  constructor() {}

  @Get()
  getHello(): string {
    return  'Visit the /cars route to see a list of cars!'
  }
}
