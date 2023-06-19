import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  productName: string = '';

  constructor() { }

  setProductName(productName: string) {
    this.productName = productName;
  }

}
