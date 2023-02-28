import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoComponent } from './modal-info.component';

describe('ModalComponent', () => {
  let component: ModalInfoComponent;
  let fixture: ComponentFixture<ModalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
