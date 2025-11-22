import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twodatabinding } from './twodatabinding';

describe('Twodatabinding', () => {
  let component: Twodatabinding;
  let fixture: ComponentFixture<Twodatabinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twodatabinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twodatabinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
