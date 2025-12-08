import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormModule } from './form.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() investmentInfo = new EventEmitter<FormModule>();
  initialValue = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  onSubmit() {
    this.investmentInfo.emit({
      initialValue: this.initialValue,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });
  }
}
