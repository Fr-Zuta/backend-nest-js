import { Get, Injectable } from '@nestjs/common';

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

  postProductos( body: any) {
    
    this.bady.push(body)
     
    return body
  }

  putProductos(){
    return 'actualizar producto'
  }

  deleteProductos(){
    return 'eliminar producto'
  }

  patchProductos(){
    return 'actualizar estatus de producto'
  }
}
