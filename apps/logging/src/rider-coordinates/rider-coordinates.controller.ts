import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/Create-Coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'This is the rider coordinates...';
  }
  @Post()
  saveCoordinates(
    @Body()
    createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return createCoordinatesDto;
  }
}
