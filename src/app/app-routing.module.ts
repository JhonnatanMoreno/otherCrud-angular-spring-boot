import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistasEstudiantesComponent } from './components/vistas-estudiantes/vistas-estudiantes.component';
import { FormEstudiantesComponent } from './components/form-estudiantes/form-estudiantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/vista', pathMatch: 'full' },
  { path: 'vista', component: VistasEstudiantesComponent },
  { path: 'form/crear', component: FormEstudiantesComponent },
  { path: 'form/actualizar/:id', component: FormEstudiantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
