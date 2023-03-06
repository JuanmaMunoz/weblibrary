import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSelectMultipleComponent } from './demo-select-multiple.component';

describe('DemoSelectMultipleComponent', () => {
  let component: DemoSelectMultipleComponent;
  let fixture: ComponentFixture<DemoSelectMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSelectMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
