import { PerfilService } from '../service/perfil.service';
import { Perfil } from '../model/perfil';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-perfil',
  templateUrl: './create-perfil.component.html',
  styleUrls: ['./create-perfil.component.css']
})

export class CreatePerfilComponent implements OnInit {

  perfil: Perfil = new Perfil();
  submitted = false;

  constructor(private perfilService: PerfilService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.perfilService.createPerfil(this.perfil)
      .subscribe(data => console.log(data), error => console.log(error));
    this.perfil = new Perfil();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listaPerfil']);
  }
}
