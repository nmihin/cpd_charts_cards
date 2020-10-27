import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatumvrijemerasponComponent } from './datumvrijemeraspon.component';

describe('DatumvrijemerasponComponent', () => {
  let component: DatumvrijemerasponComponent;
  let fixture: ComponentFixture<DatumvrijemerasponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatumvrijemerasponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatumvrijemerasponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
