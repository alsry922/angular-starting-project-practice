import {Component, computed} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(
    private readonly investmentService: InvestmentService
  ) {
  }
  results = computed(() => this.investmentService.resultData());
}
