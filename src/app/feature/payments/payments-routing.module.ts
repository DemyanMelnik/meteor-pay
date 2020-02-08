import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { PaymentFormComponent } from '@app/feature/payments/payment-form/payment-form.component';
import { OperatorsComponent } from '@app/feature/payments/operators/operators.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: OperatorsComponent,
      children: [
        {
          path: 'pay',
          component: PaymentFormComponent
        }
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PaymentsRoutingModule {}
