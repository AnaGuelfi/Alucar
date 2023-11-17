import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule} from 'primeng/toast';

import { AuthService } from '../security/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { VeiculoService } from '../veiculos/veiculo.service';
import { NotAuthorizedComponent } from './not-authorized.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    VeiculoService,
    MessageService,
    ErrorHandlerService,
    ConfirmationService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
