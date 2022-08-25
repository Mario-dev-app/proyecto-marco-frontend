import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login() {
    this.spinner.show();
    if (!this.loginForm.valid) {
      Swal.fire({
        icon: 'error',
        titleText: 'Ooops!',
        text: 'El usuario o de la contraseña no son válidos',
        confirmButtonColor: 'black',
        confirmButtonText: 'Salir'
      });
      this.spinner.hide();
      return;
    }

    const usuario = this.loginForm.controls['usuario'].value;
    const password = this.loginForm.controls['password'].value;

    this.loginService.login(usuario, password).subscribe((data: any) => {

      /* VALIDANDO SI LA RESPUESTA CONTIENE ALGÚN SOCIO DE NEGOCIO COMO RESPUESTA */
      if(data.data.length === 0){
        Swal.fire({
          icon: 'error',
          titleText: 'Ooops!',
          text: 'El usuario o de la contraseña no son válidos',
          confirmButtonColor: 'black',
          confirmButtonText: 'Salir'
        });
        this.spinner.hide();
        return;
      }

      /* ESTABLECIENDO LA SESIÓN ACTIVA Y GUARDANDO LOS DATOS EN EL LOCALSTORAGE */
      this.loginService.isLogged = true;
      this.loginService.usuarioLoggeado = data.data[0];
      console.log(this.loginService.usuarioLoggeado);
      this.router.navigateByUrl('/estado-de-cuenta');
      localStorage.setItem('usuario', JSON.stringify(data.data[0]));
      localStorage.setItem('x-token', JSON.stringify(data.token));
      this.spinner.hide();
    })
  }

}
