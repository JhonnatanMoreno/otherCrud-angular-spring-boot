import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudiantes } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  Api = '/api';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiantes> {
    return this.http.get(`${this.Api}/students`);
  }

  getOneEstudiante(id: string): Observable<Estudiantes> {
    return this.http.get(`${this.Api}/students/${id}`);
  }

  saveEstudiante(estudiante: Estudiantes): Observable<Estudiantes> {
    return this.http.post(`${this.Api}/students`, estudiante);
  }

  UpdateEstudiante(id: string, estudiante: Estudiantes): Observable<Estudiantes> {
    return this.http.put(`${this.Api}/students/${id}`, estudiante);
  }

  deleteEstudiante(id: string): Observable<Estudiantes> {
    return this.http.delete(`${this.Api}/students/${id}`);
  }
}
