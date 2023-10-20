import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosListComponent } from './veiculos/veiculos-list/veiculos-list.component';
import { LoginFormComponent } from './security/login-form/login-form.component';

const routes: Routes = [
  { path: 'veiculos', component: VeiculosListComponent },
  { path: 'login', component: LoginFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
