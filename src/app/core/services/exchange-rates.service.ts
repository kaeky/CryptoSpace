import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ExchangeRates } from '../interfaces/excangerates';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getRates(): Observable<ExchangeRates[]> {
    const path = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC';
    return this.http.get<ExchangeRates[]>(path);
  }
}

