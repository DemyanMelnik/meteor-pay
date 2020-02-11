import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxMaskModule } from 'ngx-mask';

import { PaymentFormComponent } from './payment-form.component';
import { PaymentsApiServiceProvider } from '@app/core/http/payments.api.service';

describe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), ReactiveFormsModule, RouterTestingModule, NgxMaskModule.forRoot()],
      providers: [PaymentsApiServiceProvider],
      declarations: [PaymentFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validation work correctly', () => {
    const form = fixture.componentInstance.paymentForm;

    form.setValue({ phoneNumber: null, paymentAmount: null });
    form.markAllAsTouched();
    fixture.detectChanges();

    expect(fixture.componentInstance.isPhoneNumberValid).toBe(false);
    expect(fixture.componentInstance.isPhoneNumberInvalid).toBe(true);
    expect(fixture.componentInstance.isPhoneNumberRequiredErrorVisible).toBe(true);

    expect(fixture.componentInstance.isPaymentAmountValid).toBe(false);
    expect(fixture.componentInstance.isPaymentAmountInvalid).toBe(true);
    expect(fixture.componentInstance.isPaymentAmountRequiredErrorVisible).toBe(true);

    expect(fixture.componentInstance.isPaymentFormValid).toBe(false);

    form.controls.paymentAmount.setValue(1002);
    fixture.detectChanges();
    expect(fixture.componentInstance.isPaymentAmountMaxValueErrorVisible).toBe(true);

    form.controls.paymentAmount.setValue(0);
    fixture.detectChanges();
    expect(fixture.componentInstance.isPaymentAmountMinValueErrorVisible).toBe(true);
  });
});
