import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhado/radio/radio-option.model';

@Component({
  selector: 'bc-operacao',
  templateUrl: './operacao.component.html'
})
export class OperacaoComponent implements OnInit {

  optionOperacoes: Array<RadioOption> = [
    {rotulo: 'Depósito', valor: 'DEP'},
    {rotulo: 'Saque', valor: 'SAQ'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
