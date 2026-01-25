import { Module } from '@nestjs/common';
import { ProductosController } from 'src/controllers/productos.controller';
import { ProductosService } from 'src/services/productos.service';

@Module({
  controllers: [ ProductosController],
  providers: [ ProductosService ],
})
export class ProductosModule {}
