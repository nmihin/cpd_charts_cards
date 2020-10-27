import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoroloskePostajeComponent } from './meteoroloske-postaje.component';

describe('MeteoroloskePostajeComponent', () => {
  let component: MeteoroloskePostajeComponent;
  let fixture: ComponentFixture<MeteoroloskePostajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoroloskePostajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoroloskePostajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
