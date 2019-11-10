import { PerfilService } from '../service/perfil.service';
import { Perfil } from '../model/perfil';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-perfil',
  templateUrl: './update-perfil.component.html',
  styleUrls: ['./update-perfil.component.css']
})

export class UpdatePerfilComponent implements OnInit {

  submitted = false;
  id: number;
  perfil: Perfil;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private perfilService: PerfilService) { }

  ngOnInit() {
    console.log("Consultando Perfis");
    this.perfil = new Perfil();

    this.id = this.route.snapshot.params['id'];
    
    this.perfilService.getPerfil(this.id)
      .subscribe(data => {
        console.log(data)
        this.perfil = data;
      }, error => console.log(error));
  }

  save() {
    this.perfilService.updatePerfil(this.perfil)
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