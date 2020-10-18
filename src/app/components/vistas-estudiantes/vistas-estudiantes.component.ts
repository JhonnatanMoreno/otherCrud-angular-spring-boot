import { Component, OnInit } from '@angular/core';
import { EstudianteService } from './../../services/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistas-estudiantes',
  templateUrl: './vistas-estudiantes.component.html',
  styleUrls: ['./vistas-estudiantes.component.css']
})

export class VistasEstudiantesComponent implements OnInit {
  estudiante: any = [];

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    this.getEstudiante();
  }

  getEstudiante(): void {
    this.estudianteService.getEstudiantes()
    .subscribe(res => {
      this.estudiante = res;
    }, err => console.log(err));
  }

  async deleteEstudiante(id: string): Promise<any> {
    await this.estudianteService.deleteEstudiante(id)
    .subscribe(res => {
      console.log(res);
    }, err => console.log(err));

    setTimeout(() => {
      this.getEstudiante();
    }, 3);
  }
}
