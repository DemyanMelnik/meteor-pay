/**
 * @overview     Тестирование rtkSalesApi
 * @copyright    (c) Nexign, JSC, 1992-2019.
 */

import { of } from 'rxjs';
import * as _ from 'lodash';
import helpers from 'ccm_portal/test/helpers/helpers';
import { RtkSalesApiServiceProvider } from './payments.api.service';
import { fakeAsync, tick } from '@angular/core/testing';
import * as httpUtils from '@rtccmp/core/_utils/http-utils';

describe('rtkSalesService', function() {
  beforeEach(function() {
    this.checkValue = helpers.random.anyInteger();
    this.response = {
      body: {
        value: this.checkValue
      }
    };

    this.http = _.reduce(
      ['get', 'post', 'put', 'delete'],
      (fakeHttp, methodName) => {
        fakeHttp[methodName] = jasmine.createSpy(`http.${methodName}`).and.returnValue(of(this.response.body));
        return fakeHttp;
      },
      {}
    );

    const ng1ResourceService = _.noop;

    this.rtkSalesApiService = new RtkSalesApiServiceProvider(this.http, ng1ResourceService);
  });

  it('Должен быть отправлен запрос на создание продажи', fakeAsync(function() {
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales`;
    const saleForm = {
      value: helpers.random.anyInteger()
    };
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.create(saleForm).then(responseHandleSpy);

    tick();

    expect(responseHandleSpy).toHaveBeenCalledWith(response);
    expect(this.http.post).toHaveBeenCalledWith(reqUrl, saleForm);
  }));

  it('Должен быть отправлен запрос на получение списка продаж методом POST', fakeAsync(function() {
    const params = {};
    const filterParams = {};
    const reqUrl = `/OAPI/v2/rt/crm/sales/search`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.salesListSearch(params, filterParams).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, params, {
      params: httpUtils.convertObjectToHttpParams(filterParams)
    });
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на обновление ответственного менеджера', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const params = {};
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/updateManager`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.updateResponsibleManager(saleId, params).then(responseHandleSpy);

    tick();

    expect(this.http.put).toHaveBeenCalledWith(reqUrl, params);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на получение истории ответственных менеджеров', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/assignmentHistory`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.getSaleManagersHistory(saleId).then(responseHandleSpy);

    tick();

    expect(this.http.get).toHaveBeenCalledWith(reqUrl);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на получение типа КП', fakeAsync(function() {
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/dictionaries/offers/types`;
    const params = {};
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.getTypeOffer(params).then(responseHandleSpy);

    tick();

    expect(this.http.get).toHaveBeenCalledWith(reqUrl, {
      params: httpUtils.convertObjectToHttpParams(params)
    });
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на создание КП', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const params = {};
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/offers`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.createOffer(saleId, params).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, params);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на получение листа КП', fakeAsync(function() {
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/offers/search`;
    const params = {};
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService
      .getOffers({
        body: {}
      })
      .then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, params);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на обновление КП', fakeAsync(function() {
    const offerId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/offers/${offerId}`;
    const params = {};
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService
      .updateOffer({
        body: {},
        url: { offerId }
      })
      .then(responseHandleSpy);

    tick();

    expect(this.http.put).toHaveBeenCalledWith(reqUrl, params);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на загрузку заказов для КП продажи', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/orders/search`;
    const params = {
      body: {},
      url: {
        saleId
      },
      query: {}
    };

    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();

    this.rtkSalesApiService.getOrdersByOfferSale(params).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, params.body, {
      params: httpUtils.convertObjectToHttpParams(params.query)
    });
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на отмену продажи со стороны клиента', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/cancel`;
    const response = {
      value: this.checkValue
    };

    const requestParams = {
      body: {},
      query: {},
      url: {
        saleId: saleId
      }
    };

    const responseHandleSpy = jasmine.createSpy();
    this.rtkSalesApiService.cancelSaleByCustomer(requestParams).subscribe(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, requestParams.body);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на добавление договора', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const agreementId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/ccmp-backend/sales/${saleId}/updateAgreement`;
    const response = {
      value: this.checkValue
    };
    const params = {
      url: { saleId },
      query: { agreementId }
    };

    const responseHandleSpy = jasmine.createSpy();
    this.rtkSalesApiService.updateAgreementIdForSale(params).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(
      reqUrl,
      {},
      {
        params: httpUtils.convertObjectToHttpParams(params.query)
      }
    );
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен быть отправлен запрос на изменение потенциала продажи', fakeAsync(function() {
    const saleId = helpers.random.anyPositiveInteger();
    const saleStageDataId = helpers.random.anyPositiveInteger();
    const reqUrl = `/OAPI/v2/rt/crm/sales/${saleId}/stageData/${saleStageDataId}/updatePeriodAndPotential`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();
    const params = {};
    this.rtkSalesApiService.updatePeriodAndPotential(saleId, saleStageDataId, params).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, params);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен отправить запрос на получение номера ДС', fakeAsync(function() {
    const requestParams = {
      body: {},
      query: {},
      url: {
        supplementaryAgreementId: helpers.random.anyPositiveInteger()
      }
    };
    const reqUrl = `/OAPI/v2/rt/crm/supplementaryAgreements/${requestParams.url.supplementaryAgreementId}`;
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();
    this.rtkSalesApiService.getSupplementaryAgreements(requestParams).then(responseHandleSpy);

    tick();

    expect(this.http.get).toHaveBeenCalledWith(reqUrl);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));

  it('Должен сохранить/обновить номер ДС', fakeAsync(function() {
    const reqUrl = `/OAPI/v2/rt/crm/supplementaryAgreements/createOrUpdate`;
    const requestParams = {
      body: {
        saleId: helpers.random.anyPositiveInteger(),
        agreementId: helpers.random.anyPositiveInteger(),
        supplementaryAgreementId: helpers.random.anyPositiveInteger(),
        supplementaryAgreementNumber: helpers.random.anyPositiveInteger()
      },
      query: {},
      url: {}
    };
    const response = {
      value: this.checkValue
    };

    const responseHandleSpy = jasmine.createSpy();
    this.rtkSalesApiService.createOrUpdateSupplementaryAgreements(requestParams).then(responseHandleSpy);

    tick();

    expect(this.http.post).toHaveBeenCalledWith(reqUrl, requestParams.body);
    expect(responseHandleSpy).toHaveBeenCalledWith(response);
  }));
});
