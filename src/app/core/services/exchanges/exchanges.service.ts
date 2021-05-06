import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  private ws = new WebSocketSubject('wss://ws-feed.pro.coinbase.com');

  constructor() {
    this.ws.subscribe(console.log);
  }

  getRates(...args: string[]): any {
    this.ws.next({
      type: 'subscribe',
      product_ids: args,
      channels: ['ticker']
    });
  }
}
