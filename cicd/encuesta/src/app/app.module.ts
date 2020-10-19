import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncuestasComponent } from './Componentes/encuestas/encuestas.component';
import { EncuestaFormComponent } from './Componentes/encuesta-form/encuesta-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './Service/error.interceptor.service';
import { EncuestaService } from './Service/encuesta.service';
import {MatTableModule} from '@angular/material/table'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator'
import { EncuestaEventService } from './Componentes/encuestas/encuesta-event.services';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    EncuestasComponent,
    EncuestaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [
    EncuestaService,
    EncuestaEventService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
