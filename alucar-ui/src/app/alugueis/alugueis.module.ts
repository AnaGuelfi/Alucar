import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { AlugueisListComponent } from './alugueis-list/alugueis-list.component';
import { AluguelRegisterComponent } from './aluguel-register/aluguel-register.component';
import { AluguelTermoComprometimentoComponent } from './aluguel-termo-comprometimento/aluguel-termo-comprometimento.component';
import { AluguelEntregarComponent } from './aluguel-entregar/aluguel-entregar.component';



@NgModule({
  declarations: [
    AlugueisListComponent,
    AluguelRegisterComponent,
    AluguelTermoComprometimentoComponent,
    AluguelEntregarComponent
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
  exports:[
    AlugueisListComponent,
    AluguelRegisterComponent,
    AluguelTermoComprometimentoComponent

  ]
})
export class AlugueisModule { }
