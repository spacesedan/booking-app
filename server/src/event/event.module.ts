import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schema/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Event', schema: EventSchema }]),
  ],
  providers: [EventService],
  controllers: [EventController],
})
export class EventModule {}
