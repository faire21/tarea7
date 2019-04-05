import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  id: number;
  producto: Producto;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        if (params.id) {
          this.id = Number(params.id);
          this.producto = this.productoService.getProducto(this.id);
          console.log(this.id);

        }


      }


    );
  }

}
