import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { CrearAutosComponent } from './crear-autos/crear-autos.component';

//Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Peticiones
import {HttpClientModule} from '@angular/common/http'

//Servicio
import { AutosService } from "./autos.service";
import { EditarAutosComponent } from './editar-autos/editar-autos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarAutosComponent,
    CrearAutosComponent,
    EditarAutosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
