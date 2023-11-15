import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AluguelService } from '../aluguel.service';

@Component({
  selector: 'app-alugueis-list',
  templateUrl: './alugueis-list.component.html',
  styleUrls: ['./alugueis-list.component.css']
})
export class AlugueisListComponent {
  alugueis = [];

  constructor(
    private aluguelService: AluguelService,
    private title: Title){ }

  ngOnInit(): void {
    this.list();
    this.title.setTitle('Aluguéis');
  }

  list(): void {
    this.aluguelService.listByUser()
      .then(result => {
        this.alugueis = result;
      });
  }

}
