import { Component } from '@angular/core';
import { AluguelService } from '../aluguel.service';

@Component({
  selector: 'app-alugueis-list',
  templateUrl: './alugueis-list.component.html',
  styleUrls: ['./alugueis-list.component.css']
})
export class AlugueisListComponent {
  alugueis = [];

  constructor(private aluguelService: AluguelService){ }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.aluguelService.list()
      .then(result => {
        this.alugueis = result;
      });
  }

}
