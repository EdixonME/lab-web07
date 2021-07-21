import { EventEmitter, Injectable } from '@angular/core';
import { Articulo } from './articulo.model';
import { LoggingService } from './LoggingService.service';

@Injectable()
export class ArticulosService{

    

    articulos: Articulo[] = [
        
        new Articulo("pan", 5, 0.5),
        new Articulo("galleta", 4, 2)

    ];

    detalles = new EventEmitter<number>();

    constructor(private loggingSAervice: LoggingService){}



    AgregarArticulo(articulo: Articulo){
        
        this.loggingSAervice.enviarMensajeAconsola(
            "se agrego nuevo articulo nombre:"
            + articulo.nombre + "cantidad:"+articulo.cantidad)
        this.articulos.push(articulo)
    
      
      }
      encontrarArticulo(index : number){
          let articulo : Articulo = this.articulos[index];
          return articulo;
      }

      modificarArticulo(index:number, articulo:Articulo){
             let articulo1 = this.articulos[index];
             articulo1.nombre = articulo.nombre;
             articulo1.cantidad = articulo.cantidad;
             articulo1.preciounitario = articulo.preciounitario;
      }
      eliminarArticulo(index: number){
        this.articulos.splice(index, 1);
      }
}

