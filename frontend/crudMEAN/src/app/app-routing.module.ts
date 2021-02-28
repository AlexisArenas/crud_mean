import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutosComponent } from "./listar-autos/listar-autos.component";
import { CrearAutosComponent } from "./crear-autos/crear-autos.component";
import { EditarAutosComponent } from './editar-autos/editar-autos.component';


const routes: Routes = [
{
  path:"",
  component: CrearAutosComponent,
  pathMatch: 'full'
},
{
  path: "listar",
  component: ListarAutosComponent
},
{
  path: "editar/:id",
  component: EditarAutosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
