import { Observable } from "rxjs";
import { PerfilService } from "../service/perfil.service";
import { Perfil } from "../model/perfil";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-perfil-list",
  templateUrl: "./perfil-list.component.html",
  styleUrls: ["./perfil-list.component.css"]
})
export class PerfilListComponent implements OnInit {
  perfis: Observable<Perfil[]>;

  constructor(private perfilService: PerfilService,
    private router: Router) {}

  ngOnInit() {
    console.log("Recuperando lista...");
    this.reloadData();
  }

  reloadData() {
    this.perfis = this.perfilService.getPerfilList();
  }

  deletePerfil(id: number) {
    this.perfilService.deletePerfil(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  perfilUpdate(id: number){
    this.router.navigate(['atualizarPerfil', id]);
  }

  perfilDetails(id: number){
    this.router.navigate(['detalhesPerfil', id]);
  }
}