import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortmentDetailedComponent } from './assortment-detailed.component';

describe('AssortmentDetailedComponent', () => {
  let component: AssortmentDetailedComponent;
  let fixture: ComponentFixture<AssortmentDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortmentDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssortmentDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
