import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  profileItems: MenuItem[] = [];

  items: MenuItem[] = [];

  letraInicial: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.letraInicial = this.loginService.usuarioLoggeado.CardName.substring(0,1) || '';
    this.items = [
      {
        label: 'Socio de negocio',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Estado de cuenta',
            icon: 'pi pi-money-bill',
            routerLink: 'estado-de-cuenta'
          }
        ]
      }
    ]
    this.profileItems = [
      {
        label: 'Acciones',
        items: [
          {
            label: 'Salir',
            icon: 'pi pi-power-off',
            command: () => {
              this.loginService.logout();
            }
          }
        ]
      }
    ];
  }

}
