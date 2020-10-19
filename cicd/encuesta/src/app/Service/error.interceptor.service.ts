import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor  implements HttpInterceptor {

    constructor() {}



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((error) => {
            this.handleAuthError(error);
            return of(error);
        }) as any);
    }

    private handleAuthError(error: HttpErrorResponse): Observable<any> {
        console.log(error)
        switch (error.status) {
            case 0:
                Swal.fire('Error interno del servidor',  error.message, 'error');
                break;
            case 401:
                try {
                    Swal.fire(JSON.parse(error.error.details).subject, JSON.parse(error.error.details).error, 'warning');
                 
                } catch (e) {
                    const object = JSON.parse(error.error);
                    const details = JSON.parse(object.details);
                    Swal.fire(details.subject, details.error, 'warning');
                }
                break;
            case 404:
                
                try {
                    Swal.fire(JSON.parse(error.error.details).subject, JSON.parse(error.error.details).error, 'warning');
                } catch (e) {
                    const object = JSON.parse(error.error);
                    const details = JSON.parse(object.details);
                    Swal.fire(details.subject, details.error, 'warning');
                }
                break;
            case 403:
                try {
                    Swal.fire(JSON.parse(error.error.details).subject, JSON.parse(error.error.details).error, 'warning');
                } catch (e) {
                    const object = JSON.parse(error.error);
                    const details = JSON.parse(object.details);
                    Swal.fire(details.subject, details.error, 'warning');
                }
                break;

            default:
                try {
                    Swal.fire(JSON.parse(error.error.details).subject, JSON.parse(error.error.details).error, 'error');
                } catch (e) {
                    const object = JSON.parse(error.error);
                    const details = JSON.parse(object.details);
                    Swal.fire(details.subject, details.error, 'error');
                }
                break;
        }
        return of(error.message);
        throw error;
    }
}
