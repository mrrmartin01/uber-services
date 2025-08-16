import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/Create-Coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}
  @Get(':id')
  async getRiderCoordinates(
    @Param('id')
    id: string,
  ) {
    return await this.coordinatesService.getRiderCoordinates(id);
  }
  @Post()
  async saveCoordinates(
    @Body()
    createCoordinatesDto: CreateCoordinatesDto,
  ) {
    return await this.coordinatesService.saveRiderCoordinate(
      createCoordinatesDto,
    );
  }
}
