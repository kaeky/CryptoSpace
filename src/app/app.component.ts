import { Component } from '@angular/core';
import { ExchangeRatesService} from "./core/services/exchange-rates.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CriptoSpace';

  constructor(
    private exchangeratesService: ExchangeRatesService
  ) { }

  getAllRates(): any {
    this.exchangeratesService.getRates().subscribe(rates => {
      console.log(rates);
    });
  }
}
