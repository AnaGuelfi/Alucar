import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioUpdateDataValidadeComponent } from './usuario-update-data-validade/usuario-update-data-validade.component';
import { UsuarioRegisterCnhComponent } from './usuario-register-cnh/usuario-register-cnh.component';

@NgModule({
  declarations: [
    UsuarioRegisterComponent,
    UsuarioPerfilComponent,
    UsuarioUpdateComponent,
    UsuarioUpdateDataValidadeComponent,
    UsuarioRegisterCnhComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    UsuarioRegisterComponent,
    UsuarioPerfilComponent,
    UsuarioUpdateComponent,
    UsuarioUpdateDataValidadeComponent,
    UsuarioRegisterCnhComponent
  ]
})
export class UsuariosModule { }
