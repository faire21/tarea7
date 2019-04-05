import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { ProductosDetalleComponent } from './productos/productos-detalle/productos-detalle.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosListaComponent, children: [
    {path: ':id', component: ProductosDetalleComponent}
  ]},
  {path: 'carrito', component: ProductosListaComponent},
  {path: ':id', component: ProductosDetalleComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
