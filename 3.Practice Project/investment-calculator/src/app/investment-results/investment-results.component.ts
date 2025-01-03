import { Component, inject } from '@angular/core';
import { InvestmentService } from './investment-results.servies';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResults } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.investmentResults;
  }

}
