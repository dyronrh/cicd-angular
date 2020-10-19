import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EncuestaFormComponent } from './Componentes/encuesta-form/encuesta-form.component';
import { EncuestasComponent } from './Componentes/encuestas/encuestas.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EncuestaService } from './Service/encuesta.service';
import { EncuestaEventService } from './Componentes/encuestas/encuesta-event.services';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
 
      imports:[RouterTestingModule,MatTableModule,ReactiveFormsModule,MatDividerModule,MatSelectModule,
        MatPaginatorModule,MatButtonModule,MatIconModule],
providers:[EncuestaService,EncuestaEventService],
schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
        EncuestasComponent,
        EncuestaFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Encuesta sobre Coca cola!');
  });
});
