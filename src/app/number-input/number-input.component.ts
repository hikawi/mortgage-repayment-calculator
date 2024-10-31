import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'number-input',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.sass',
})
export class NumberInputComponent {
  @Input() identifier: string = 'id';
  @Input() name: string = 'Title';
  @Input() label: string = 'Title';
  @Input() description: string = 'Prefix';
  @Input() alignDescription: 'prefix' | 'suffix' = 'prefix';

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  errorMessage: string | undefined = undefined;

  handleChange(e: Event) {
    const el = e.target as HTMLInputElement;
    const num = parseFloat(el.value.replace(/[^\d\.]/g, ""));
    const formatted = isNaN(num) ? "" : num.toLocaleString("en-US", { maximumFractionDigits: 2 });

    this.value = formatted;
    this.valueChange.emit(formatted);

    if (num < 0) {
      this.errorMessage = "Mortgage can't be negative";
    } else if (num > Number.MAX_SAFE_INTEGER) {
      this.errorMessage = "That number is too large";
    } else if (el.value === "") {
      this.errorMessage = "This field is required";
    } else {
      this.errorMessage = "";
    }

    el.setCustomValidity(this.errorMessage);
    el.reportValidity();
  }
}
