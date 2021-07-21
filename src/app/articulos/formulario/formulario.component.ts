import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../../articulo.model';
import { ArticulosService } from '../../articulo.service';

import { LoggingService } from '../../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit {

  
  nombreInput:string ;
  cantidadInput:number;
  precioInput:number;
  index:number;
  modoEdicion:number;
  

  constructor(private loggingService:LoggingService,
              private articuloService:ArticulosService,
              private router:Router,
              private route :ActivatedRoute) { 
                this.articuloService.detalles.subscribe(
                  (indice:number)=> alert(" el indice es :"+ indice)
                );

              }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion ===1){
      let articulo: Articulo = this.articuloService.encontrarArticulo(this.index)
      this.nombreInput = articulo.nombre;
      this.cantidadInput = articulo.cantidad;
      this.precioInput = articulo.preciounitario;
    }
  }
    
  onGuardarArticulo(){
    let articulo1 = new Articulo(this.nombreInput, this.cantidadInput, this.precioInput);
    this.loggingService.enviarMensajeAconsola("Enviamos articulo : articulo");

    if(this.modoEdicion != null && this.modoEdicion ===1){
      this.articuloService.modificarArticulo(this.index, articulo1);

    }else{
      this.articuloService.AgregarArticulo(articulo1);
    }
    
    this.router.navigate(['articulos']);
  }

  eliminarArticulo(){
    if(this.index != null){
      this.articuloService.eliminarArticulo(this.index);
    }
    this.router.navigate(['articulos']);
  }

  

}
