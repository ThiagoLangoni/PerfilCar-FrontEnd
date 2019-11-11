import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePerfilComponent } from './perfil/create-perfil/create-perfil.component';
import { UpdatePerfilComponent } from './perfil/update-perfil/update-perfil.component';
import { PerfilDetailsComponent } from './perfil/perfil-details/perfil-details.component';
import { PerfilListComponent } from './perfil/perfil-list/perfil-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePerfilComponent,
    UpdatePerfilComponent,
    PerfilDetailsComponent,
    PerfilListComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
