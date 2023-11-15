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

@NgModule({
  declarations: [
    UsuarioRegisterComponent
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
    UsuarioRegisterComponent
  ]
})
export class UsuariosModule { }
