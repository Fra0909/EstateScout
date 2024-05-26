import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAutoCompleteComponent } from './location-auto-complete.component';

describe('LocationAutoCompleteComponent', () => {
  let component: LocationAutoCompleteComponent;
  let fixture: ComponentFixture<LocationAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationAutoCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
