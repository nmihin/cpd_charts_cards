import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiezometarskePostajeComponent } from './piezometarske-postaje.component';

describe('PiezometarskePostajeComponent', () => {
  let component: PiezometarskePostajeComponent;
  let fixture: ComponentFixture<PiezometarskePostajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiezometarskePostajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiezometarskePostajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
