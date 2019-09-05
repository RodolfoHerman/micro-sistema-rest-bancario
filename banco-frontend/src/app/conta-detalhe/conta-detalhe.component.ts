import { Component, OnInit } from '@angular/core';
import { ContasService } from 'app/contas/contas.service';
import { Conta } from 'app/contas/conta/conta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bc-conta-detalhe',
  templateUrl: './conta-detalhe.component.html'
})
export class ContaDetalheComponent implements OnInit {

  conta: Conta;

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.contasService.contaPorId(this.route.snapshot.params['id']).subscribe(conta => this.conta = conta);
  }

}
