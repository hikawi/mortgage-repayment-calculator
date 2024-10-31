import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputComponent } from './number-input/number-input.component';
import { RadioInputComponent } from "./radio-input/radio-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberInputComponent, RadioInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {

  amount = "";
  term = "";
  rate = "";
  type: "repayment" | "interest" | undefined;

  total = -1;

  checkError() {
    const amount = parseFloat(this.amount);
    const term = parseFloat(this.term);
    const rate = parseFloat(this.rate);

    return isNaN(amount) || isNaN(term) || isNaN(rate) || !this.type;
  }

  handleSubmit(e: Event) {
    const amount = parseFloat(this.amount);
    const term = parseFloat(this.term);
    const rate = parseFloat(this.rate);

    if (this.checkError()) {
      return;
    }
  }

}
