import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { EncuestasComponent } from './encuestas.component';
import { EncuestaService } from 'src/app/Service/encuesta.service';
import { EncuestaEventService } from './encuesta-event.services';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EncuestasComponent', () => {
  let component: EncuestasComponent;
  let fixture: ComponentFixture<EncuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasComponent ],
      imports:[MatTableModule,ReactiveFormsModule,MatDividerModule,MatSelectModule,
               MatPaginatorModule,MatButtonModule,MatIconModule],
     // providers:[EncuestaService,EncuestaEventService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
