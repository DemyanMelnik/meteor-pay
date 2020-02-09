/**
 * @overview     Сервис для работы с api продаж
 * @copyright    (c) Nexign, JSC, 1992-2019.
 */

import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

interface IPayment {
  operator: string;
  phoneNumber: string;
  paymentAmount: string;
}

@Injectable()
export class PaymentsApiServiceProvider {
  sendPayment(paymentData: IPayment): Observable<HttpEvent<any>> {
    if (this.isRequestSuccess) {
      return of(
        new HttpResponse({
          status: 200,
          body: paymentData
        })
      );
    } else {
      return throwError(
        new HttpErrorResponse({
          status: 502,
          statusText: 'Bad Gateway'
        })
      );
    }
  }

  get isRequestSuccess() {
    return Math.round(Math.random()) === 1;
  }
}
