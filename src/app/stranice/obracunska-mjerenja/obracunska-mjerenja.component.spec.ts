import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObracunskaMjerenjaComponent } from './obracunska-mjerenja.component';

describe('ObracunskaMjerenjaComponent', () => {
  let component: ObracunskaMjerenjaComponent;
  let fixture: ComponentFixture<ObracunskaMjerenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObracunskaMjerenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObracunskaMjerenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
