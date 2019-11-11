import { PerfilDetailsComponent } from './perfil/perfil-details/perfil-details.component';
import { CreatePerfilComponent } from './perfil/create-perfil/create-perfil.component';
import { UpdatePerfilComponent } from './perfil/update-perfil/update-perfil.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilListComponent } from './perfil/perfil-list/perfil-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'listaPerfil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listaPerfil', component: PerfilListComponent },
  { path: 'criaPerfil', component: CreatePerfilComponent },
  { path: 'detalhesPerfil/:id', component: PerfilDetailsComponent },
  { path: 'atualizarPerfil/:id', component: UpdatePerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
