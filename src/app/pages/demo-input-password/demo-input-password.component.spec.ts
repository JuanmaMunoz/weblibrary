import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputPasswordComponent } from './demo-input-password.component';

describe('DemoInputPasswordComponent', () => {
  let component: DemoInputPasswordComponent;
  let fixture: ComponentFixture<DemoInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
