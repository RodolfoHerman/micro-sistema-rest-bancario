import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'bc-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: Array<RadioOption>;

  valor: any;

  constructor() { }

  ngOnInit() {
  }

  setValor(valor: any) {

    this.valor = valor;
  }

}
