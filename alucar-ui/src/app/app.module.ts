import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './security/auth.service';
import { AlugueisModule } from './alugueis/alugueis.module';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SecurityModule } from './security/security.module';
import { VeiculosModule } from './veiculos/veiculos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlugueisModule,
    VeiculosModule,
    SecurityModule,
    CoreModule
  ],
  exports:[
    NavbarComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
