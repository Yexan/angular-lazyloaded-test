import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoweruserComponent } from './poweruser.component';

describe('PoweruserComponent', () => {
  let component: PoweruserComponent;
  let fixture: ComponentFixture<PoweruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoweruserComponent]
    });
    fixture = TestBed.createComponent(PoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
