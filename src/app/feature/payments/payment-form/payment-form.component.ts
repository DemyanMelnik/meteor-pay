import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentForm!: FormGroup;
  minValueOfPaymentAmount = 0;
  maxValueOfPaymentAmount = 1000;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
    this.createForm();
  }

  ngOnInit() {}

  pay() {}

  get isPhoneNumberRequiredErrorVisible() {
    return this.paymentForm.controls.phoneNumber.errors.required && this.paymentForm.controls.phoneNumber.touched;
  }

  get isPaymentAmountRequiredErrorVisible() {
    return this.paymentForm.controls.paymentAmount.errors.required && this.paymentForm.controls.paymentAmount.touched;
  }

  get isPaymentAmountMaxValueErrorVisible() {
    return this.paymentForm.controls.paymentAmount.errors.max && this.paymentForm.controls.paymentAmount.touched
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
