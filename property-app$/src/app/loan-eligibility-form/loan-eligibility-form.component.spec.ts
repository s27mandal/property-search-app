import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEligibilityFormComponent } from './loan-eligibility-form.component';

describe('LoanEligibilityFormComponent', () => {
  let component: LoanEligibilityFormComponent;
  let fixture: ComponentFixture<LoanEligibilityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanEligibilityFormComponent]
    });
    fixture = TestBed.createComponent(LoanEligibilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
