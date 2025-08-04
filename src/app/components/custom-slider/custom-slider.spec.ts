import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSlider } from './custom-slider';

describe('CustomSlider', () => {
  let component: CustomSlider;
  let fixture: ComponentFixture<CustomSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
