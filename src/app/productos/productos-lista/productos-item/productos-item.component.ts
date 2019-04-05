import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../producto';
import { Router, ActivatedRoute } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-productos-item',
  templateUrl: './productos-item.component.html',
  styleUrls: ['./productos-item.component.css']
})
export class ProductosItemComponent implements OnInit {

  @Input() producto: Producto;
  @Output() Uncarrito = new EventEmitter();
  @Output() borrarUnProducto = new EventEmitter();
  @Output() detalli = new EventEmitter();
  urlProducto: boolean;
  constructor(
    public router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    if (this.router.url === '/productos') {
      this.urlProducto = true;
    } else {
      this.urlProducto = false;
    }
  }

  borrarProducto() {
    this.borrarUnProducto.emit(this.producto);

  }
  carrito() {
    this.Uncarrito.emit(this.producto);

  }
  detalle() {
    this.detalli.emit(this.producto.id);
  }
}
