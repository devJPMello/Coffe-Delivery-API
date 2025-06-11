import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCoffeeDto) {
    return this.coffeeService.create(dto);
  }

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.coffeeService.findById(Number(id));
  }

  @Get(':id/order')
  findPedidosByCafeId(@Param('id') id: string) {
    return this.coffeeService.findPedidosByCafeId(Number(id));
  }

  @Get('plus-order-coffee')
  findMaisVendidos() {
    return this.coffeeService.findMaisVendidos();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(Number(id));
  }
}
