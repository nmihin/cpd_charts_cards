import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidrologijaComponent } from './hidrologija.component';

describe('HidrologijaComponent', () => {
  let component: HidrologijaComponent;
  let fixture: ComponentFixture<HidrologijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidrologijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidrologijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
