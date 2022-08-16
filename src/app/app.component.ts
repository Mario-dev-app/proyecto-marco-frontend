import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'prototipo';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    if(localStorage.getItem('usuario') && localStorage.getItem('x-token')){
      this.loginService.isLogged = true;
      this.loginService.usuarioLoggeado = JSON.parse(localStorage.getItem('usuario') || '');
      this.loginService.token = JSON.parse(localStorage.getItem('x-token') || '');
    }
  }

}
