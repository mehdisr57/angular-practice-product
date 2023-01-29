import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowComponent } from './product-show.component';

describe('ProductShowComponent', () => {
  let component: ProductShowComponent;
  let fixture: ComponentFixture<ProductShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
