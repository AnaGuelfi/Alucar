import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlugueisListComponent } from './alugueis/alugueis-list/alugueis-list.component';
import { AluguelRegisterComponent } from './alugueis/aluguel-register/aluguel-register.component';
import { AuthGuard } from './security/auth.guard';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { UsuarioRegisterComponent } from './usuarios/usuario-register/usuario-register.component';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';
import { VeiculoRegisterComponent } from './veiculos/veiculo-register/veiculo-register.component';
import { VeiculoUpdateCrlvComponent } from './veiculos/veiculo-update-crlv/veiculo-update-crlv.component';
import { VeiculosDisponiveisListComponent } from './veiculos/veiculos-disponiveis-list/veiculos-disponiveis-list.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AluguelTermoComprometimentoComponent } from './alugueis/aluguel-termo-comprometimento/aluguel-termo-comprometimento.component';
import { AluguelEntregarComponent } from './alugueis/aluguel-entregar/aluguel-entregar.component';


const routes: Routes = [
  { path: '', redirectTo: 'veiculos/disponiveis', pathMatch: 'full' },
  {
    path: 'alugueis',
    component: AlugueisListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_RENTAL']}
  },
  {
    path: 'alugueis/new/:id',
    component: AluguelRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_RENTAL']}
  },
  {
    path: 'alugueis/:id/comprometimento',
    component: AluguelTermoComprometimentoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_RENTAL']}
  },
  {
    path: 'alugueis/:id/entrega',
    component: AluguelEntregarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_RENTAL']}
  },
  {
    path: 'usuarios/new',
    component: UsuarioRegisterComponent
  },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'veiculos',
    component: VeiculosListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_CAR']}
  },
  {
    path: 'veiculos/disponiveis',
    component: VeiculosDisponiveisListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_CAR']}
  },
  {
    path: 'veiculos/:id',
    component: VeiculoRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_CAR']}
  },
  {
    path: 'veiculos/new',
    component: VeiculoRegisterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_CAR']}
  },
  {
    path: 'veiculos/:id/crlv',
    component: VeiculoUpdateCrlvComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_REGISTER_CAR']}
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'page-not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
