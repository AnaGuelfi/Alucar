import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Usuario } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update-data-validade',
  templateUrl: './usuario-update-data-validade.component.html',
  styleUrls: ['./usuario-update-data-validade.component.css']
})
export class UsuarioUpdateDataValidadeComponent {
  user = new Usuario();

  constructor(
    private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.title.setTitle('Atualização da Data de Validade da CNH');
  }

  loadUser() {
    this.userService.editById()
      .then(user => {
        this.user = user;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  updateDataValidade(userForm: NgForm): void {
    this.userService.updateDataValidadeCNH(this.user)
      .then( user => {
        this.messageService.add({ severity: 'success', detail: 'Data de Validade da CNH editada com sucesso!' });
        this.router.navigate(['/usuarios', this.user.id]);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
