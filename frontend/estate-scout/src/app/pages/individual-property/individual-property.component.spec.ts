import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPropertyComponent } from './individual-property.component';

describe('IndividualPropertyComponent', () => {
  let component: IndividualPropertyComponent;
  let fixture: ComponentFixture<IndividualPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
