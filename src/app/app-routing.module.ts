import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormularioComponent } from './articulos/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path : '', component: ArticulosComponent},
  {path : 'articulos', component: ArticulosComponent, children :[
    {path : 'agregar', component: FormularioComponent},
    {path : ':id', component: FormularioComponent},
  ]},
  {path: '**',component: ErrorComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
