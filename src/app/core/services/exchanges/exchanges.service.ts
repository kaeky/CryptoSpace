import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { debounceTime, delay, throttleTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private ws = new WebSocketSubject('wss://ws-feed.pro.coinbase.com');

  constructor() { }

  getRates(refreshRate = 0, ...args: string[]): Observable<any> {
    this.ws.next({
      type: 'subscribe',
      product_ids: args,
      channels: ['ticker']
    });

    return this.ws.pipe(
      throttleTime(refreshRate)
    );
  }
}
