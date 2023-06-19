import { Component } from '@angular/core';
import { FrontComponent } from '../front/front.component';
import { ProductStateService } from './product-state.service';

@Component({
  selector: 'app-poweruser',
  templateUrl: './poweruser.component.html',
  styleUrls: ['./poweruser.component.sass']
})
export class PoweruserComponent extends FrontComponent {

  constructor(private productStatePU: ProductStateService) {
    super(productStatePU);
  }

  override setModuleName() {
    this.moduleName = 'poweruser';
  }

}
