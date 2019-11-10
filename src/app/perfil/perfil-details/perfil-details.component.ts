import { Perfil } from '../model/perfil';
import { Component, OnInit, Input } from '@angular/core';
import { PerfilService } from '../service/perfil.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-details',
  templateUrl: './perfil-details.component.html',
  styleUrls: ['./perfil-details.component.css']
})

export class PerfilDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['listaPerfil']);
  }
}