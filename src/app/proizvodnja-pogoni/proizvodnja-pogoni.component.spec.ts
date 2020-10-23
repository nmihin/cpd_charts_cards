import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodnjaPogoniComponent } from './proizvodnja-pogoni.component';

describe('ProizvodnjaPogoniComponent', () => {
  let component: ProizvodnjaPogoniComponent;
  let fixture: ComponentFixture<ProizvodnjaPogoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodnjaPogoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodnjaPogoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
