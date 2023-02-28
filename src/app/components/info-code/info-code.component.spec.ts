import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCodeComponent } from './info-code.component';

describe('InfoCodeComponent', () => {
  let component: InfoCodeComponent;
  let fixture: ComponentFixture<InfoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
