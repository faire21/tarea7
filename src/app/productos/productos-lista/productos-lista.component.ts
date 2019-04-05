import { OnInit, Component } from '@angular/core';
import { Producto } from '../producto';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';



@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[];
  total: number;
  private subscript: Subscription;
  urlProducto: boolean;
  constructor(
    private productosService: ProductosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url === '/productos') {
      this.urlProducto = true;
      this.productos = this.productosService.getProductos();
      this.subscript = this.productosService.cambiaDato.subscribe
      (
        (arregloProductos: Producto[]) => {
          this.productos = arregloProductos;
        }
      );
    } else {
      this.urlProducto = false;
      this.productos = this.productosService.getCarrito();
      this.productos.forEach(element =>  {
        this.total += element.precio;
      });
      this.subscript = this.productosService.cambiaDatoCarrito.subscribe
      (
        (arregloProductos: Producto[]) => {
          this.productos = arregloProductos;
        }
      );
    }
  }
  borrarProducto(ProductoABorrar) {
    this.productosService.borrarProducto(ProductoABorrar.id);
  }

  carrito(productoAAñadir) {
    this.productosService.addProducto(productoAAñadir.id);

  }
  detalle(id: number) {
    this.router.navigate(['../id'], {relativeTo: this.route} );
  }
}

