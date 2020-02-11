import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PaymentsApiServiceProvider } from '@app/core/http/payments.api.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentFormComponent {
  paymentForm!: FormGroup;
  minValueOfPaymentAmount = 1;
  maxValueOfPaymentAmount = 1000;
  operatorParams: any;
  isSuccessMessageHidden = true;
  isErrorHidden = true;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private paymentsApiService: PaymentsApiServiceProvider
  ) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.operatorParams = params;
    });
    this.createForm();
  }

  pay() {
    const paymentData = {
      ...this.operatorParams,
      ...this.paymentForm.value
    };

    this.paymentsApiService.sendPayment(paymentData).subscribe(
      response => {
        this.isSuccessMessageHidden = false;
        this.isErrorHidden = true;
        this.paymentForm.reset();
        console.info(response);
      },
      error => {
        this.isSuccessMessageHidden = true;
        this.isErrorHidden = false;
        throw error;
      }
    );
  }

  get isPhoneNumberValid() {
    return this.paymentForm.controls.phoneNumber.valid && this.paymentForm.controls.phoneNumber.touched;
  }

  get isPhoneNumberInvalid() {
    return this.paymentForm.controls.phoneNumber.invalid && this.paymentForm.controls.phoneNumber.touched;
  }

  get isPhoneNumberRequiredErrorVisible() {
    return this.paymentForm.controls.phoneNumber.errors?.required && this.paymentForm.controls.phoneNumber.touched;
  }

  get isPaymentAmountValid() {
    return this.paymentForm.controls.paymentAmount.valid && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentAmountInvalid() {
    return this.paymentForm.controls.paymentAmount.invalid && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentAmountRequiredErrorVisible() {
    return this.paymentForm.controls.paymentAmount.errors?.required && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentAmountMaxValueErrorVisible() {
    return this.paymentForm.controls.paymentAmount.errors?.max && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentAmountMinValueErrorVisible() {
    return this.paymentForm.controls.paymentAmount.errors?.min && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentFormValid() {
    return this.paymentForm.valid;
  }

  private createForm() {
    this.paymentForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      paymentAmount: [
        '',
        [
          Validators.required,
          Validators.min(this.minValueOfPaymentAmount),
          Validators.max(this.maxValueOfPaymentAmount)
        ]
      ]
    });
  }
}
