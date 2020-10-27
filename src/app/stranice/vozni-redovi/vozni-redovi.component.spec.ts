import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozniRedoviComponent } from './vozni-redovi.component';

describe('VozniRedoviComponent', () => {
  let component: VozniRedoviComponent;
  let fixture: ComponentFixture<VozniRedoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VozniRedoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VozniRedoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
