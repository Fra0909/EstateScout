import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSearchComponent } from './pre-search.component';

describe('PreSearchComponent', () => {
  let component: PreSearchComponent;
  let fixture: ComponentFixture<PreSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
