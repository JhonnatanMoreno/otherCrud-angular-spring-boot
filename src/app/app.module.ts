import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEstudiantesComponent } from './components/form-estudiantes/form-estudiantes.component';
import { VistasEstudiantesComponent } from './components/vistas-estudiantes/vistas-estudiantes.component';
import { EstudianteService } from './services/estudiante.service';

@NgModule({
  declarations: [
    AppComponent,
    FormEstudiantesComponent,
    VistasEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EstudianteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
