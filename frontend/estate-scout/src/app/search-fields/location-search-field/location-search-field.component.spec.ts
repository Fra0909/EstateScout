import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchFieldComponent } from './location-search-field.component';

describe('SearchFieldComponent', () => {
  let component: LocationSearchFieldComponent;
  let fixture: ComponentFixture<LocationSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationSearchFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
