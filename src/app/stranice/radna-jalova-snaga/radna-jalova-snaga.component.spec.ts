import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnaJalovaSnagaComponent } from './radna-jalova-snaga.component';

describe('RadnaJalovaSnagaComponent', () => {
  let component: RadnaJalovaSnagaComponent;
  let fixture: ComponentFixture<RadnaJalovaSnagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnaJalovaSnagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnaJalovaSnagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
