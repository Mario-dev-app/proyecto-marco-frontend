import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-up-navbar',
  templateUrl: './up-navbar.component.html',
  styleUrls: ['./up-navbar.component.css']
})
export class UpNavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  profileItems: MenuItem[] = [];
  addItems: MenuItem[] = [];

  nombre: string = this.loginService.usuarioLoggeado.nombre || '';

  letraInicial: string = 'NN';

  ngOnInit(): void {

    this.letraInicial = this.nombre.substring(0,1);

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
          },
          {
            label: 'Configuración',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];

    this.addItems = [
      {
        label: 'Nuevo ticket',
        icon: 'pi pi-bookmark'
      }
    ]
  }


}
