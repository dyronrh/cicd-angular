import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
const header = {'Content-Type':'application/json'}

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }

  listarEncuestas():Observable<any>{
    return this.http.get(environment.base_endpoint+'list',{headers:header});
  }

  addEncuestas(body):Observable<any>{
    return this.http.post(environment.base_endpoint+'add',body,{headers:header});
  }
  updateEncuestas(id,body):Observable<any>{
    return this.http.put(environment.base_endpoint+id,body,{headers:header});
  }

  deleteEncuesta(id):Observable<any>{
    return this.http.delete(environment.base_endpoint+id,{headers:header})
  }

}
