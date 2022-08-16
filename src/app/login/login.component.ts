import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

cargando: boolean = false;

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.valid){
      Swal.fire({
        icon: 'error',
        titleText: 'Ooops!',
        text: 'El formato del correo o de la contraseña no son válidos',
        confirmButtonColor: 'black',
        confirmButtonText: 'Salir'
      });
      return;
    }

    const correo = this.loginForm.controls['correo'].value;
    const password = this.loginForm.controls['password'].value;
    
    this.cargando = true;
    this.loginService.login(correo, password).subscribe( (data:any) => {
      this.loginService.isLogged = true;
      this.loginService.usuarioLoggeado = data.usuario;
      this.router.navigateByUrl('/usuarios');
      localStorage.setItem('usuario', JSON.stringify(data.usuario));
      localStorage.setItem('x-token', JSON.stringify(data.token));
      this.cargando = false;
    }, ({error}) => {
      Swal.fire({
        icon: 'error',
        titleText: 'Ooops!',
        text: `${error.msg}`,
        confirmButtonColor: 'black',
        confirmButtonText: 'Salir'
      });
      this.cargando = false;
    });
  }


}
