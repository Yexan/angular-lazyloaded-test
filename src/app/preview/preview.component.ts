import { Component } from '@angular/core';
import { FrontComponent } from '../front/front.component';
import { ProductStateService } from '../preview/product-state.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent extends FrontComponent {

  constructor(private productStatePreview: ProductStateService) {
    super(productStatePreview);
  }

  override setModuleName() {
    this.moduleName = 'preview';
  }

}
