import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhado/radio/radio-option.model';
import { Conta } from 'app/contas/conta/conta.model';
import { Formulario } from './formulario.model';
import { ContasService } from 'app/contas/contas.service';

@Component({
  selector: 'bc-operacao',
  templateUrl: './operacao.component.html'
})
export class OperacaoComponent implements OnInit {

  optionOperacoes: Array<RadioOption> = [
    {rotulo: 'Depósito', valor: 'DEP'},
    {rotulo: 'Saque', valor: 'SAQ'}

  ];

  @Input() conta: Conta;

  constructor(private contaService: ContasService) { }

  ngOnInit() {
  }

  enviarDados(form: any) {

    let dados = new Formulario(form);
    
    this.conta.valor    = dados.getValor();
    this.conta.deposito = dados.isDeposito();

    this.contaService.atualizar(this.conta).subscribe(conta => console.log(conta));
  }

}
