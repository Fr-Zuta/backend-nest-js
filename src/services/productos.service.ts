import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { createProductoDto } from 'src/dto/create-productos.dto';
import { updateProductoDto } from 'src/dto/update-productos.dto'; 

export interface product {
  name: string,
  precioU: number,
  stok: number
}

@Injectable()
export class ProductosService {

  private bady: any[] = [];


  getProductos() {
    return this.bady;
  }

  getproducto(id: number){
    const productEncontrado = this.bady.find(body => body.id === id)
    if(!productEncontrado){
      // return ' el producto no se encuentra '
      return new NotFoundException(`el producto con el DI: ${id} no fue encontrado`);
    }
    return productEncontrado
  }

  postProductos( body: createProductoDto) {
    
    this.bady.push({
      ...body,
      id: this.bady.length + 1,
    });
     
    return body
  }

  putProductos(body: updateProductoDto){
    console.log(body)
    return 'actualizar producto'
  }

  deleteProductos(){
    return 'eliminar producto'
  }

  patchProductos(){
    return 'actualizar estatus de producto'
  }
}
