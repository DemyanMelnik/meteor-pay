import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

import { PaymentsRoutingModule } from './payments-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentFormComponent } from '@app/feature/payments/payment-form/payment-form.component';
import { OperatorsComponent } from '@app/feature/payments/operators/operators.component';

@NgModule({
  imports: [ReactiveFormsModule, TranslateModule, NgxMaskModule.forRoot(), PaymentsRoutingModule],
  declarations: [OperatorsComponent, PaymentFormComponent]
})
export class PaymentsModule {}
