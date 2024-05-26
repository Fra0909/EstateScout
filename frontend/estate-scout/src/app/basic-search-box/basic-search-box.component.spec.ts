import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSearchBoxComponent } from './basic-search-box.component';

describe('SearchBoxComponent', () => {
  let component: BasicSearchBoxComponent;
  let fixture: ComponentFixture<BasicSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSearchBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
