import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { skip, throttleTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private ws = new WebSocketSubject('wss://ws-feed.pro.coinbase.com');
  private products!: string[];

  constructor() { }

  getRates(refreshRate = 0, ...args: string[]): Observable<any> {
    this.products = args;
    this.ws.next({
      type: 'subscribe',
      product_ids: args,
      channels: ['ticker']
    });

    return this.ws.pipe(
      skip(1),
      throttleTime(refreshRate)
    );
  }

  unsubscribe(): void {
    this.ws.next({
      type: 'unsubscribe',
      product_ids: this.products,
      channels: ['ticker']
    });
    this.ws.complete();
  }
}
