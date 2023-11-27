import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AluguelCancelamentoComponent } from './alugueis/aluguel-cancelamento/aluguel-cancelamento.component';
import { AluguelEntregarComponent } from './alugueis/aluguel-entregar/aluguel-entregar.component';
import { AlugueisListComponent } from './alugueis/alugueis-list/alugueis-list.component';
import { AluguelRegisterComponent } from './alugueis/aluguel-register/aluguel-register.component';
import { AluguelTermoComprometimentoComponent } from './alugueis/aluguel-termo-comprometimento/aluguel-termo-comprometimento.component';
import { AuthGuard } from './security/auth.guard';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { UsuarioPerfilComponent } from './usuarios/usuario-perfil/usuario-perfil.component';
import { UsuarioRegisterComponent } from './usuarios/usuario-register/usuario-register.component';
import { UsuarioRegisterCnhComponent } from './usuarios/usuario-register-cnh/usuario-register-cnh.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update/usuario-update.component';
import { UsuarioUpdateDataValidadeComponent } from './usuarios/usuario-update-data-validade/usuario-update-data-validade.component';
import { TermoConsentimentoComponent } from './alugueis/termos/termo-consentimento/termo-consentimento.component';
import { TermoComprometimentoComponent } from './alugueis/termos/termo-comprometimento/termo-comprometimento.component';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';
import { VeiculoRegisterComponent } from './veiculos/veiculo-register/veiculo-register.component';
import { VeiculoUpdateCrlvComponent } from './veiculos/veiculo-update-crlv/veiculo-update-crlv.component';
import { VeiculosDisponiveisListComponent } from './veiculos/veiculos-disponiveis-list/veiculos-disponiveis-list.component';
import { CrlvComponent } from './veiculos/crlv/crlv.component';

const routes: Routes = [
  { path: '', redirectTo: 'veiculos/disponiveis', pathMatch: 'full' },
  {
    path: 'alugueis',
    component: AlugueisListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_RENTAL']}
  },
  {
    path: 'alugueis/consentimento/:id',
    component: TermoConsentimentoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_RENTAL']}
  },
  {
    path: 'alugueis/comprometimento/:id',
    component: TermoComprometimentoComponent,
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
    path: 'alugueis/:id/cancelamento',
    component: AluguelCancelamentoComponent,
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
  {
    path: 'usuarios/:id',
    component: UsuarioPerfilComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_USER']}
  },
  {
    path: 'usuarios/update/:id',
    component: UsuarioUpdateComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_UPDATE_USER']}
  },
  {
    path: 'usuarios/:id/cnh',
    component: UsuarioRegisterCnhComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_UPDATE_USER']}
  },
  {
    path: 'usuarios/:id/datacnh',
    component: UsuarioUpdateDataValidadeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_UPDATE_USER']}
  },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'veiculos',
    component: VeiculosListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_CAR']}
  },
  {
    path: 'veiculos/crlv/:id',
    component: CrlvComponent,
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
