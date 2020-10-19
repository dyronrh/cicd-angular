import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { EncuestaFormComponent } from './encuesta-form.component';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { EncuestaEventService } from '../encuestas/encuesta-event.services';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EncuestaFormComponent', () => {
  let component: EncuestaFormComponent;
  let fixture: ComponentFixture<EncuestaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaFormComponent ],
      imports:[MatIconModule,ReactiveFormsModule,MatTableModule,MatDividerModule,MatSelectModule,MatPaginatorModule,MatButtonModule],
     // providers:[EncuestaService,EncuestaEventService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
