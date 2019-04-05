import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { ProductosDetalleComponent } from './productos/productos-detalle/productos-detalle.component';
import { ProductosItemComponent } from './productos/productos-lista/productos-item/productos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductosComponent,
    ProductosListaComponent,
    ProductosDetalleComponent,
    ProductosItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
