import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';
import { VeiculoRegisterComponent } from './veiculo-register/veiculo-register.component';

@NgModule({
  declarations: [
    VeiculosListComponent,
    VeiculoRegisterComponent
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
    DropdownModule
  ],
  exports: [
    VeiculosListComponent,
    VeiculoRegisterComponent
  ]
})
export class VeiculosModule { }
