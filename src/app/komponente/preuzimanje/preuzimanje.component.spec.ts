import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreuzimanjeComponent } from './preuzimanje.component';

describe('PreuzimanjeComponent', () => {
  let component: PreuzimanjeComponent;
  let fixture: ComponentFixture<PreuzimanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreuzimanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreuzimanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
