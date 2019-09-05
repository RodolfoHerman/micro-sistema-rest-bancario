import { Component, OnInit } from '@angular/core';
import { Conta } from './conta/conta.model';
import { ContasService } from './contas.service';

@Component({
  selector: 'bc-contas',
  templateUrl: './contas.component.html'
})
export class ContasComponent implements OnInit {

  contas: Array<Conta> = [];

  constructor(private contasService: ContasService) { }

  ngOnInit() {

    this.contasService.contas().subscribe(response => {
      this.contas = response.data
    });
  }

}
