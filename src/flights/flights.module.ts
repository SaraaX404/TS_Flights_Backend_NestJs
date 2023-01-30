import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flights])],
  providers: [FlightsService],
  controllers: [FlightsController],
})
export class FlightsModule {}
