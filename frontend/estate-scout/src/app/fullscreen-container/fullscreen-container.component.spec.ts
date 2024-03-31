import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenContainerComponent } from './fullscreen-container.component';

describe('FullscreenContainerComponent', () => {
  let component: FullscreenContainerComponent;
  let fixture: ComponentFixture<FullscreenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullscreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
