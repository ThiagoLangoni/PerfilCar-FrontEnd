import { LoginService } from '../service/login.service';
import { Usuario } from '../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {

  }

  login() {
    this.loginService.getLogin(this.usuario.nome, this.usuario.senha)
      .subscribe(data => this.gotoList(data), error => console.log(error));
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  gotoList(data : Object) {
    console.log(data);
    this.router.navigate(['/listaPerfil']);
  }

}
