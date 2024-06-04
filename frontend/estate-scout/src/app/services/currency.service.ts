import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public convertNumberToGBP(numberToConvert: number): string {
    const GBPFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    return GBPFormatter.format(numberToConvert);
  }

}
