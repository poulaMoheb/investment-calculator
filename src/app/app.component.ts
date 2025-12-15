import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormModule } from './form/form.module';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  private investmentService = inject(InvestmentService);
  onCalculateInvestmentResults(enteredData: FormModule) {
    this.investmentService.calculateInvestmentResults(enteredData);}
}
