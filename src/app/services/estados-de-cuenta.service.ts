import { LoginService } from './login.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosDeCuentaService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  /* localhost:3000/api/estadoDeCuenta?cardCode=P20505365136 */

  cargarData(){
    return this.http.get(`${environment.BASE_URL}/estadoDeCuenta?cardCode=${this.loginService.usuarioLoggeado.CardCode}`);
  }

  generarExcel(data: any){
    return this.http.post(`${environment.BASE_URL}/json2excel`, data,  { responseType : 'blob'});
  }
}
