import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxFieldMenuComponent } from './min-max-field-menu-component';

describe('MinMaxFieldMenuComponent', () => {
  let component: MinMaxFieldMenuComponent;
  let fixture: ComponentFixture<MinMaxFieldMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinMaxFieldMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinMaxFieldMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
