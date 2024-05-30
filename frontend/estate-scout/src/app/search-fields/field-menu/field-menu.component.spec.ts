import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMenuComponent } from './field-menu.component';

describe('FieldMenuComponent', () => {
  let component: FieldMenuComponent;
  let fixture: ComponentFixture<FieldMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
