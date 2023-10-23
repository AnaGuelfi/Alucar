import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { AlugueisListComponent } from './alugueis/alugueis-list/alugueis-list.component';

const routes: Routes = [
  { path: 'alugueis', component: AlugueisListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'veiculos', component: VeiculosListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
