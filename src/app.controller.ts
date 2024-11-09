import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("assignment-1-fibonacci-sequence/:terms")
  getFibonacciSequence(@Param("terms") terms: string): { sequence: number[] } {
    const numTerms = parseInt(terms, 10); 
    const seq = [0, 1];

    for (let num = 2; num < numTerms; num++) {
      seq.push(seq[num - 1] + seq[num - 2]);
    }

    return { 
      "sequence" : seq 
    };
  }

}
