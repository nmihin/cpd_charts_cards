import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazAkumulacijaComponent } from './prikaz-akumulacija.component';

describe('PrikazAkumulacijaComponent', () => {
  let component: PrikazAkumulacijaComponent;
  let fixture: ComponentFixture<PrikazAkumulacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazAkumulacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazAkumulacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
