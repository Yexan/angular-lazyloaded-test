import { Injectable } from '@angular/core';

import { ProductStateService as ProductState } from '../front/product-state.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService extends ProductState {

  constructor() {
    super();
  }
}
