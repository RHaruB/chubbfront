import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  urlBase = environment.urlBase
  controladorSeguro = 'Seguros/'

  constructor(
    private http: HttpClient
  ) {

  }
  getSeguros(): Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get<any>(this.urlBase + this.controladorSeguro + 'ConsultarSeguros');
  }
  postSeguro(datosSeguro: any) {

    return this.http.post<any>(this.urlBase + this.controladorSeguro + 'RegistrarSeguro', datosSeguro);
  }
  putSeguro(datosSeguro: any) {

    return this.http.post<any>(this.urlBase + this.controladorSeguro + 'EditarSeguro', datosSeguro);
  }
  getPolizas(cedula: string, codigoSeguro: number): Observable<any> {
    const poliza = {
      cedula,
      codigoSeguro
    }
    let params = new HttpParams()
      .append("cedula", poliza.cedula.toString())
      .append("codigoSeguro", codigoSeguro.toString())

    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.http.post<any>(this.urlBase + this.controladorSeguro + 'ConsultaPolizas', poliza, { headers, params });
  }

  asignarPolizas(codigoPersona: number, codigoSeguro: number): Observable<any> {
    const poliza = {
      codigoPersona,
      codigoSeguro
    }
    let params = new HttpParams()
      .append("cedula", poliza.codigoPersona.toString())
      .append("codigoSeguro", codigoSeguro.toString())

    const headers = new HttpHeaders().set('content-type', 'application/json')
    return this.http.post<any>(this.urlBase + this.controladorSeguro + 'RegistroPolizas', poliza, { headers, params });
  }
}
