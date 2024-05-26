import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAutoCompleteFieldComponent } from './location-auto-complete-field.component';

describe('LocationAutoCompleteComponent', () => {
  let component: LocationAutoCompleteFieldComponent;
  let fixture: ComponentFixture<LocationAutoCompleteFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAutoCompleteFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAutoCompleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
