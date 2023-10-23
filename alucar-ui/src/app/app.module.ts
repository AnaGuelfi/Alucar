import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosModule } from './veiculos/veiculos.module';
import { SecurityModule } from './security/security.module';
import { AuthService } from './security/auth.service';
import { AlugueisModule } from './alugueis/alugueis.module';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    AlugueisModule,
    VeiculosModule,
    SecurityModule
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
