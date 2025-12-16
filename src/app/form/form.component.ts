import { Component, output, signal } from '@angular/core';
import { userInputModule } from './user-input.module';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  investmentInfo = output<userInputModule>();
  initialValue = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('0');

  constructor(private investmentService: InvestmentService ) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialValue: +this.initialValue(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
    this.initialValue.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('0');
  }
}
