import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmptyResultsComponent } from './empty-results/empty-results.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { PaymentResultsComponent } from './payment-results/payment-results.component';
import { RadioInputComponent } from "./radio-input/radio-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberInputComponent, RadioInputComponent, EmptyResultsComponent, PaymentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {

  amount = "";
  term = "";
  rate = "";
  type: "repayment" | "interest" | undefined;

  monthly = -1;
  total = -1;

  checkError() {
    const amount = parseFloat(this.amount.replace(",", ""));
    const term = parseFloat(this.term.replace(",", ""));
    const rate = parseFloat(this.rate.replace(",", ""));

    return isNaN(amount) || isNaN(term) || isNaN(rate) || !this.type;
  }

  handleSubmit(e: Event) {
    const amount = parseFloat(this.amount.replace(",", ""));
    const term = parseFloat(this.term.replace(",", ""));
    const rate = parseFloat(this.rate.replace(",", ""));

    if (this.checkError()) {
      this.monthly = -1;
      this.total = -1;
      return;
    }

    if (this.type == "repayment") {
      // Number of periodic payments (n) = payments per year times number of years
      // Periodic Interest Rate (i) = annual rate divided by the number of payments per
      // Discount factor (D) = {[(1 + i) ^n] – 1} / [i(1 + i)^n]
      // Loan Payment = Amount/Discount Factor

      const n = term * 12;
      const i = rate / 100 / 12;
      const d = (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n));

      this.monthly = amount / d;
      this.total = this.monthly * term * 12;
    } else {
      // Interests only.
      // Loan Payment = Amount x (Interest Rate/12)

      this.monthly = amount * (rate / 100 / 12);
      this.total = this.monthly * term * 12;
    }
  }

}
