import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeItemsComponent } from './cafe-items.component';

describe('CafeItemsComponent', () => {
  let component: CafeItemsComponent;
  let fixture: ComponentFixture<CafeItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeItemsComponent]
    });
    fixture = TestBed.createComponent(CafeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
