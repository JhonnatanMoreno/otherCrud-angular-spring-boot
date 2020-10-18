import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasEstudiantesComponent } from './vistas-estudiantes.component';

describe('VistasEstudiantesComponent', () => {
  let component: VistasEstudiantesComponent;
  let fixture: ComponentFixture<VistasEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistasEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistasEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
