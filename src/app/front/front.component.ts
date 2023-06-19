import { Component } from '@angular/core';
import { ProductStateService } from './product-state.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass']
})
export class FrontComponent {

  constructor(private productState: ProductStateService) {
    this.setProductName('Front');
  }

  get productName() {
    return this.productState.productName;
  }

  setProductName(newName: string) {
    this.productState.productName = newName;
  }
}
