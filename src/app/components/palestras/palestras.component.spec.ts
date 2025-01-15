import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestrasComponent } from './palestras.component';

describe('PalestrasComponent', () => {
  let component: PalestrasComponent;
  let fixture: ComponentFixture<PalestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
