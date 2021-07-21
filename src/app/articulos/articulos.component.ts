import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticulosService } from '../articulo.service';
import { LoggingService } from '../LoggingService.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = [];
  nombreInput : string = "";
  cantidadInput : number = null;
  precioInput : number = null;
  
  Total : Number = null;

  constructor(private loggingService :LoggingService,
              private articulosService: ArticulosService,
              private router:Router){
                this.articulosService.detalles.subscribe(
                  (a : number ) => alert ("la cantidad es " + a)
                );
              }
              
  ngOnInit(): void{
    this.articulos = this.articulosService.articulos;
  }

 
  
  
  sumarTotal(){
    let total = 0;
    for (let arti in  this.articulos){

     total += this.articulos[arti].cantidad*
              this.articulos[arti].preciounitario;
  
    }
    return total;
  }


  agregar(){
    this.router.navigate(['articulos/agregar']);
  }

}
