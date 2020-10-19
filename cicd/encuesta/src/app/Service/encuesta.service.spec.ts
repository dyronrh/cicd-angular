import { TestBed } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
const header = {'Content-Type':'application/json'}
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EncuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [  ],
    imports:[HttpClientModule,HttpClientTestingModule],
    providers:[ ],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: EncuestaService = TestBed.get(EncuestaService);
    expect(service).toBeTruthy();
  });
});
