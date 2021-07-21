import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../articulo.model';
import { ArticulosService } from '../../articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo: Articulo;
  @Input() indice:number;
  constructor(private articuloServices:ArticulosService) { }

  ngOnInit(): void {
  }
  sumarTotal (){
    /*let total = 0;
    for (let arti in  this.articulos){

     total += this.articulos[arti].cantidad*
              this.articulos[arti].preciounitario;
  
    }
    return total;*/
  }

  emitirTotal(){
    this.articuloServices.detalles.emit(this.indice);
  }

}
