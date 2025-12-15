import { Injectable, signal } from "@angular/core";
import type { FormModule } from "./form/form.module";

@Injectable({providedIn: 'root' })
export class InvestmentService{
    resultsData = signal<{ 
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number, 
      totalInterest: number,
      totalAmountInvested: number
    }[] | undefined>(undefined);

    calculateInvestmentResults(enteredData: FormModule){
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
        this.resultsData.set(annualData);
    }
}