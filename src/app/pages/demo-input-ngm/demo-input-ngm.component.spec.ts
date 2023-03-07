import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputNGMComponent } from './demo-input-ngm.component';

describe('DemoInputNGMComponent', () => {
  let component: DemoInputNGMComponent;
  let fixture: ComponentFixture<DemoInputNGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoInputNGMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoInputNGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
