import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';
import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';
import { VeiculoRegisterComponent } from './veiculo-register/veiculo-register.component';
import { VeiculoUpdateCrlvComponent } from './veiculo-update-crlv/veiculo-update-crlv.component';
import { VeiculosDisponiveisListComponent } from './veiculos-disponiveis-list/veiculos-disponiveis-list.component';

@NgModule({
  declarations: [
    VeiculosListComponent,
    VeiculoRegisterComponent,
    VeiculoUpdateCrlvComponent,
    VeiculosDisponiveisListComponent
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
    VeiculosListComponent,
    VeiculoRegisterComponent,
    VeiculoUpdateCrlvComponent,
    VeiculosDisponiveisListComponent
  ]
})
export class VeiculosModule { }
