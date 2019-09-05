import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bc-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: Array<RadioOption>;

  valor: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValor(valor: any) {

    this.valor = valor;
    this.onChange(this.valor);
  }

  writeValue(obj: any): void {
    
    this.valor = obj;
  }

  registerOnChange(fn: any): void {
    
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

}
