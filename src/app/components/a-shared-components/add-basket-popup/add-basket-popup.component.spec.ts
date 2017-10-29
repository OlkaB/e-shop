import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasketPopupComponent } from './add-basket-popup.component';

describe('AddBasketPopupComponent', () => {
  let component: AddBasketPopupComponent;
  let fixture: ComponentFixture<AddBasketPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBasketPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
