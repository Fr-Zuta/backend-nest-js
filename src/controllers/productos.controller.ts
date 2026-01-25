import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Req, Res } from "@nestjs/common";
import type {Request, Response} from 'express';
import path from "path";
import { ProductosService } from "src/services/productos.service";

@Controller('/productos')
export class ProductosController {

  constructor(private productosService:ProductosService) { }

  @Get()
  getAllProductos(@Query() query: any){
    console.log(query)
    return this.productosService.getProductos();
  }

  @Post()
  createProducto(@Body() body: any){
    return this.productosService.postProductos( body );
  }

  @Put()
  updateProducto(){
    return this.productosService.putProductos();
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