import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'payment-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './payment-results.component.html',
  styleUrl: './payment-results.component.sass'
})
export class PaymentResultsComponent {

  @Input() monthly: number = 0;
  @Input() total: number = 0;

}
