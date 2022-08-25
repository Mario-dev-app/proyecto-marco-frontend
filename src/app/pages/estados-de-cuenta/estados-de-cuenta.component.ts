import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './../../services/login.service';
import { EstadosDeCuentaService } from './../../services/estados-de-cuenta.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estados-de-cuenta',
  templateUrl: './estados-de-cuenta.component.html',
  styleUrls: ['./estados-de-cuenta.component.css']
})
export class EstadosDeCuentaComponent implements OnInit {

  cardName: string = '';

  data: any = [];

  constructor(private estadosDeCuentaService: EstadosDeCuentaService, private loginService: LoginService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cardName = this.loginService.usuarioLoggeado.CardName;
    this.cargarData();
  }

  cargarData(){
    this.estadosDeCuentaService.cargarData().subscribe( (data: any) => {
      this.data = data.data;
    });
  }

  generarExcel(){
    this.spinner.show();
    this.estadosDeCuentaService.generarExcel(this.data).subscribe((excel) => {
      this.downloadFile(excel);
      this.spinner.hide();
    }, (err) => {
      Swal.fire({
        icon: 'error',
        titleText: 'Hubo un error al intentar generar el documento de Excel. Contacte al administrador.',
        text: err,
        confirmButtonColor: 'black',
        confirmButtonText: 'Salir'
      });
      this.spinner.hide();
      return;
    });
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url= window.URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.download = 'estado-de-cuenta.xlsx';
    anchor.href = url;
    anchor.click();
  }

}
