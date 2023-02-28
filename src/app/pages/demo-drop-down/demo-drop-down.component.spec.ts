import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropDownComponent } from './demo-drop-down.component';

describe('DemoDropDownComponent', () => {
  let component: DemoDropDownComponent;
  let fixture: ComponentFixture<DemoDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
