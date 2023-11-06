import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlugueisListComponent } from './alugueis/alugueis-list/alugueis-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';
import { VeiculoRegisterComponent } from './veiculos/veiculo-register/veiculo-register.component';
import { VeiculoUpdateCrlvComponent } from './veiculos/veiculo-update-crlv/veiculo-update-crlv.component';
import { VeiculosDisponiveisListComponent } from './veiculos/veiculos-disponiveis-list/veiculos-disponiveis-list.component';

const routes: Routes = [
  { path: 'alugueis', component: AlugueisListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'veiculos', component: VeiculosListComponent },
  { path: 'veiculos/disponiveis', component: VeiculosDisponiveisListComponent },
  { path: 'veiculos/:id', component: VeiculoRegisterComponent },
  { path: 'veiculos/new', component: VeiculoRegisterComponent},
  { path: 'veiculos/:id/crlv', component: VeiculoUpdateCrlvComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
