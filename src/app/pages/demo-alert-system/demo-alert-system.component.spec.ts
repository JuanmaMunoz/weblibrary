import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAlertSystemComponent } from './demo-alert-system.component';

describe('DemoAlertSystemComponent', () => {
  let component: DemoAlertSystemComponent;
  let fixture: ComponentFixture<DemoAlertSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAlertSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAlertSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
