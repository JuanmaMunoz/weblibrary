import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextNGMComponent } from './input-text-ngm.component';

describe('InputTextNGMComponent', () => {
  let component: InputTextNGMComponent;
  let fixture: ComponentFixture<InputTextNGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextNGMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextNGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
