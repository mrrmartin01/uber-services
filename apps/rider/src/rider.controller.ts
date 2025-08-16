import { Controller } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(@Payload() payload: { id: string }) {
    return Promise.resolve({
      _id: payload.id,
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'peter@parker.com',
    });
  }
}
