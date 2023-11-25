import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Usuario } from 'src/app/core/model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent {
  user = new Usuario();

  constructor(
    private userService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title
  ){}

  ngOnInit(): void {
    this.list();
    this.title.setTitle('Meu Perfil');
  }

  list(): void {
    this.userService.listById()
      .then(result => {
        this.user = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
