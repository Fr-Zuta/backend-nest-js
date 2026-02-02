import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import type {Request, Response} from 'express';
import path from "path";
import { createProductoDto } from "src/dto/create-productos.dto";
import { updateProductoDto } from "src/dto/update-productos.dto";
import { ProductosService } from "src/services/productos.service";

@Controller('/productos')
export class ProductosController {

  constructor(private productosService:ProductosService) { }

  @Get()
  getAllProductos(@Query() query: any){
    console.log(query)
    return this.productosService.getProductos();
  }

  @Get('/:id')
  getProducto(@Param('id') id: string){
    return this.productosService.getproducto(parseInt(id));
  }


  @Post()
  // @UsePipes( new ValidationPipe())
  createProducto(@Body() body: createProductoDto){
    return this.productosService.postProductos(body);
  }

  @Put()
  updateProducto(@Body() body: updateProductoDto){
    return this.productosService.putProductos(body);
  }

  @Delete()
  deleteProducto(){
    return this.productosService.deleteProductos();
  }

  @Patch()
  updatestatusp(@Req() request:Request, @Res() response:Response){ //raraves se utiliza los response y request
    // return this.productosService.patchProductos();
    response.status(200).json({
      message: 'respuesta de estatus'
    })
  }
}