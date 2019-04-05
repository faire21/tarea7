import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cambiaDato = new Subject<Producto[]>();
  cambiaDatoCarrito = new Subject<Producto[]>();
  private lastID = 1;
  carrito: Producto[];
  productos: Producto[] = [
    new Producto(this.lastID++, 'Zbook', 'HP', 'Laptop', 15000, 8),
    new Producto(this.lastID++, 'Surface', 'Microsoft', 'Laptop', 18800, 4),
    new Producto(this.lastID++, 'Nitro 5 Gaming', 'Acer', 'Laptop', 19700, 2),
    new Producto(this.lastID++, 'All in one', 'HP', 'Computadora de Escritorio', 8000, 9),
    new Producto(this.lastID++, 'All in one', 'Lenovo', 'Computadora de Escritorio', 10000, 10),
    new Producto(this.lastID++, 'MacMini', 'Apple', 'Computadora de Escritorio', 19500, 4),
    new Producto(this.lastID++, 'Pavilion', 'HP', 'Laptop', 11300, 7)
  ];



  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }
  getCarrito(): Producto[] {
    return this.carrito.slice();
  }
  notificarCambios() {
    this.cambiaDato.next(this.productos.slice());

  }
  notificarCambiosCarrito() {
    this.cambiaDatoCarrito.next(this.productos.slice());

  }

  getProducto(id: number): Producto {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }
  addProducto(id: number): boolean {
    const pos = this.productos.findIndex(p => p.id === id);

    /*
    const pr = this.carrito.findIndex(p => p.id === this.productos[pos].id);
    if (pr) { // existe en carrito
      return false;
    }*/

    this.carrito.push(Object.assign({}, this.productos[pos]));
    this.notificarCambiosCarrito();
    return true;
  }

  borrarProducto(id: number): boolean {
    const pos = this.productos.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambios();
      return true;

    }
    return false;
  }
}
