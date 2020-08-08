import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './types/items.types';
import { CreateDto } from './items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }
  // pattern based matching
  @Get(':id')
  findOne(@Param() param: { id: number }): Item | string {
    return this.itemService.findById(param.id);
  }
  @Post()
  createObject(@Body() body: CreateDto): CreateDto {
    return body;
  }

  @Delete(':id')
  deleteObject(@Param() param: { id: number }): string {
    return `An object is deleted ${param.id}`;
  }

  @Put(':id')
  updateObject(@Body() body: CreateDto): string {
    return `The object deleted name is ${body.name}`;
  }
}
