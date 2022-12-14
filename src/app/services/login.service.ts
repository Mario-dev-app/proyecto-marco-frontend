import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;

  usuarioLoggeado: any = {};

  token: string = '';

  constructor(private http: HttpClient, public router: Router) { }

  login(usuario: string, password: string){
    const body = {
      usuario,
      password
    }
    return this.http.post(`${environment.BASE_URL}/login`, body);
  }

  logout(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('x-token');
    this.isLogged = false;
    this.router.navigateByUrl('/login');
  }

}
