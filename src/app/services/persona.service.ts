import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlBase= environment.urlBase
  controladorPersona = 'Persona/'

  constructor(
    private http: HttpClient
  ) {

  }
  getPersonas():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.controladorPersona+'ConsultarPersonas');
  }
  getPersona(codigo: number):Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.controladorPersona+'ConsultarPersona');
  }
  postPersona(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersona+'RegistrarPersona',datosCliente);
  }
  putPersona(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersona+'EditarPersona',datosCliente);
  }
  deletePersona(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersona+'EliminarPersona',datosCliente);
  }
}
