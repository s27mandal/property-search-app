import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-eligibility-form',
  templateUrl: './loan-eligibility-form.component.html',
  styleUrls: ['./loan-eligibility-form.component.css'],
})
export class LoanEligibilityFormComponent {
  tenureValue: number = 5;
  step = 1;
}
