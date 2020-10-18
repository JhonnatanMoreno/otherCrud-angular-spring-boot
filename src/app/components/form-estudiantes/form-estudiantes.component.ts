import { Component, OnInit } from '@angular/core';
import { Estudiantes } from './../../models/Estudiante';
import { EstudianteService } from './../../services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-estudiantes',
  templateUrl: './form-estudiantes.component.html',
  styleUrls: ['./form-estudiantes.component.css']
})

export class FormEstudiantesComponent implements OnInit {
  estudiante: Estudiantes = {
    id: '',
    name: '',
    description: ''
  };

  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    const { id } = params;
    this.estudianteService.getOneEstudiante(id)
    .subscribe(res => {
      this.estudiante = res;
    }, err => console.log(err));
  }

  guardarOActualizar(): void {
    if (this.estudiante.id !== '') {
      this.estudianteService.UpdateEstudiante(this.estudiante.id, this.estudiante)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/vista']);
      }, err => console.log(err));
    } else {
      this.estudianteService.saveEstudiante(this.estudiante)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/vista']);
    }, err => console.log(err));
    }
  }

}
