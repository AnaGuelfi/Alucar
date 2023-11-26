import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { CNH, Usuario } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-usuario-register-cnh',
  templateUrl: './usuario-register-cnh.component.html',
  styleUrls: ['./usuario-register-cnh.component.css']
})
export class UsuarioRegisterCnhComponent {
  usuario = this.auth.jwtPayload?.usuario_id;
  cnh = new CNH();

  constructor(
    private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de CNH');
  }

  saveCNH(cnhForm: NgForm): void {
    this.userService.saveCNH(this.cnh)
      .then( cnh => {
        this.messageService.add({ severity: 'success', detail: 'CNH cadastrada com sucesso!' });
        this.router.navigate(['/usuarios', this.usuario]);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
