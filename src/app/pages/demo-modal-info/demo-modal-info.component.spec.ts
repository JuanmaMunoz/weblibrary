import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalInfoComponent } from './demo-modal-info.component';

describe('DemoModalInfoComponent', () => {
  let component: DemoModalInfoComponent;
  let fixture: ComponentFixture<DemoModalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoModalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
