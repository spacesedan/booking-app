import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { Types } from 'mongoose';
import { DayService } from './day.service';
import { Logger } from '@nestjs/common';

@Controller('day')
export class DayController {
  constructor(private dayService: DayService) {}

  @Get('/seed')
  async seedDays() {
    return this.dayService.seedDays();
  }

  @Get('/')
  async getDays() {
    Logger.log(this.dayService.getDays());

    return this.dayService.getDays();
  }

  @Get('/:id')
  async getDay(@Param('id') id: Types.ObjectId) {
    return this.dayService.getDay({ id });
  }

  @Patch('/:id/true')
  async updateAvailTrue(@Param('id') id: Types.ObjectId) {
    return this.dayService.updateDayAvailTrue({ id });
  }

  @Patch('/:id/false')
  async updateAvailFalse(@Param('id') id: Types.ObjectId) {
    return this.dayService.updateDayAvailFalse({ id });
  }

  @Delete('/clear')
  async clearDayCollection() {
    return this.dayService.clearDayCollection();
  }
}
