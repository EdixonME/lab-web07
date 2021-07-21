import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggingService } from './LoggingService.service';
import { ArticulosService } from './articulo.service';
import { AppRoutingModule } from './app-routing.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulos/articulo/articulo.component';
import { FormularioComponent } from './articulos/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ArticuloComponent,
    FormularioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
