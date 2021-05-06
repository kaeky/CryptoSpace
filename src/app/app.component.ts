import { Component } from '@angular/core';
import { ExchangesService } from './core/services/exchanges/exchanges.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CriptoSpace';

  constructor(private exchangesService: ExchangesService) {}

  getAllRates(): any {
    this.exchangesService.getRates(1000, 'BTC-USD', 'ETH-USD').subscribe(console.log);
  }

  unsubscribe(): any {
    this.exchangesService.unsubscribe();
  }
}
