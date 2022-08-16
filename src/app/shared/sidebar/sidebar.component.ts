import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }


  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {label: 'Estado de cuenta', icon: 'pi pi-money-bill', routerLink: 'estados-de-cuenta'}
  ];
  }

}
