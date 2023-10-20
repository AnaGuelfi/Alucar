import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';

@NgModule({
  declarations: [
    VeiculosListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [
    VeiculosListComponent
  ]
})
export class VeiculosModule { }
