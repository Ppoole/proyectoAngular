import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTodasNotasComponent } from './modal-todas-notas.component';

describe('ModalTodasNotasComponent', () => {
  let component: ModalTodasNotasComponent;
  let fixture: ComponentFixture<ModalTodasNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTodasNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTodasNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
