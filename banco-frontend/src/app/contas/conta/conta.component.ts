import { Component, OnInit, Input } from '@angular/core';
import { Conta } from './conta.model';

@Component({
  selector: 'bc-conta',
  templateUrl: './conta.component.html'
})
export class ContaComponent implements OnInit {

  @Input() conta: Conta;

  constructor() { }

  ngOnInit() {
  }

}
