import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


import { AlugueisListComponent } from './alugueis-list/alugueis-list.component';



@NgModule({
  declarations: [
    AlugueisListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports:[
    AlugueisListComponent
  ]
})
export class AlugueisModule { }
