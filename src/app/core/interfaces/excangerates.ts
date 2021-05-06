export interface ExchangeRates {
  currency: string;
  rates: Array<Rates>;

}

export interface Rates {
  [key: string]: string;
}
