import { Component } from '@angular/core';
import { userInputModule } from './form/user-input.module';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}
  onCalculateInvestmentResults(enteredData: userInputModule) {
    this.investmentService.calculateInvestmentResults(enteredData);
}
}
