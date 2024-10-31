import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'radio-input',
  standalone: true,
  imports: [],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.sass'
})
export class RadioInputComponent {

  @Input() value: "repayment" | "interest" | undefined;
  @Output() valueChange = new EventEmitter<"repayment" | "interest" | undefined>();

  handleChange(value: "repayment" | "interest") {
    this.value = value;
    this.valueChange.emit(value);
  }

}
