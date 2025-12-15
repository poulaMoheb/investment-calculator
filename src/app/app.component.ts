import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormModule } from './form/form.module';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData?: {
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    }[];
  onCalculateInvestmentResults(enteredData: FormModule) {
  const annualData = [];
  let investmentValue = enteredData.initialValue;

  for (let i = 0; i < enteredData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (enteredData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + enteredData.annualInvestment;
    const totalInterest =
      investmentValue - enteredData.annualInvestment * year - enteredData.initialValue;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: enteredData.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: enteredData.initialValue + enteredData.annualInvestment * year,
    });
  }
  this.resultsData = annualData;
}
}
