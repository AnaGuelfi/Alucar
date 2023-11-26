import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import * as moment from 'moment';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Usuario } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent {
  user = new Usuario();

  constructor(
    private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadUser();
    this.title.setTitle('Atualização de Perfil');
  }

  loadUser() {
    this.userService.editById()
      .then(user => {
        this.user = user;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  save(userForm: NgForm) {
    this.updateUser(userForm);
  }

  updateUser(userForm: NgForm) {
    this.userService.update(this.user)
      .then( user => {
        this.messageService.add({ severity: 'success', detail: 'Perfil atualizado com sucesso!' });
        this.user = user;
        this.loadUser();
        this.router.navigate(['/usuarios', user.id]);
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
