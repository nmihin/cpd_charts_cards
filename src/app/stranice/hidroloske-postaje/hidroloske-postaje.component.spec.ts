import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidroloskePostajeComponent } from './hidroloske-postaje.component';

describe('HidroloskePostajeComponent', () => {
  let component: HidroloskePostajeComponent;
  let fixture: ComponentFixture<HidroloskePostajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidroloskePostajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidroloskePostajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
