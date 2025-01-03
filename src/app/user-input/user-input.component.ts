import {Component, signal} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(
    private readonly investmentService: InvestmentService
  ) {
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number.parseInt(this.enteredInitialInvestment()),
      duration: Number.parseInt(this.enteredDuration()),
      expectedReturn: Number.parseInt(this.enteredExpectedReturn()),
      annualInvestment: Number.parseInt(this.enteredAnnualInvestment()),
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
