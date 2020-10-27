import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodnozjeComponent } from './podnozje.component';

describe('PodnozjeComponent', () => {
  let component: PodnozjeComponent;
  let fixture: ComponentFixture<PodnozjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodnozjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodnozjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
