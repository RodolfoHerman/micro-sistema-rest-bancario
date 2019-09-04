import { Component, OnInit } from '@angular/core';
import { Conta } from './conta/conta.model';

@Component({
  selector: 'bc-contas',
  templateUrl: './contas.component.html'
})
export class ContasComponent implements OnInit {

  contas: Array<Conta> = [
    {
      id: 1,
      saldo: 0.0,
      deposito: false,
      valor: 300.00,
      dataCriacao: "2019-09-04T18:30:25.175+0000",
      dataAtualizacao: "2019-09-04T18:30:25.175+0000"
    },
    {
      id: 33,
      saldo: 500.00,
      deposito: true,
      valor: 100.00,
      dataCriacao: "2019-09-04T18:31:13.511+0000",
      dataAtualizacao: "2019-09-04T18:31:13.511+0000"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
