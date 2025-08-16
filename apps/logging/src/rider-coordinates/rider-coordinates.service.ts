/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/Create-Coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  RiderCoordinate,
  RiderCoordinatesDocument,
} from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @Inject('RIDER_SERVICE')
    private readonly client: ClientProxy,

    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinateModel: Model<RiderCoordinatesDocument>,
  ) {}

  async getRiderCoordinates(riderId: string) {
    const coordinates = await this.riderCoordinateModel.find({
      rider: riderId,
    });
    const pattern = { cmd: 'get-rider' };
    const payload = { id: riderId };
    const rider = await firstValueFrom(this.client.send(pattern, payload));

    return { coordinates, rider };
  }

  async saveRiderCoordinate(createCoordinatesDto: CreateCoordinatesDto) {
    const riderDetails =
      await this.riderCoordinateModel.create(createCoordinatesDto);
    return riderDetails;
  }
}
