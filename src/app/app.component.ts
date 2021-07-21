import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo.model';
import { LoggingService } from './LoggingService.service';
import { ArticulosService } from './articulo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  titulo = 'Carrito de Compras';
  

}
