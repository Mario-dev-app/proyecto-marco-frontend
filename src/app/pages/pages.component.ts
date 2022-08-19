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

  letraInicial: string = 'M';

  constructor() { }

  ngOnInit(): void {
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
              console.log('Cerrando sesión...')
            }
          },
          {
            label: 'Configuración',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];
  }

}
