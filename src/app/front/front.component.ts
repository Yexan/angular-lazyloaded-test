import { Component } from '@angular/core';
import { ProductStateService } from './product-state.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass']
})
export class FrontComponent {
  moduleName: string = ''

  constructor(private productState: ProductStateService) {
    this.setModuleName();
    this.logModuleName();
  }

  get productName() {
    return this.productState.productName;
  }

  setProductName(newName: string) {
    this.productState.productName = newName;
  }

  setModuleName() {
    this.moduleName = 'front';
  }
  logModuleName() {
    console.log(this.moduleName);
  }
}
