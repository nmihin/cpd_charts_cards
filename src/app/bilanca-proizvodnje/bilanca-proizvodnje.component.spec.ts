import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilancaProizvodnjeComponent } from './bilanca-proizvodnje.component';

describe('BilancaProizvodnjeComponent', () => {
  let component: BilancaProizvodnjeComponent;
  let fixture: ComponentFixture<BilancaProizvodnjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilancaProizvodnjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilancaProizvodnjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
