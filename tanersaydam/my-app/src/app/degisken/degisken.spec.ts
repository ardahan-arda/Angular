import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Degisken } from './degisken';

describe('Degisken', () => {
  let component: Degisken;
  let fixture: ComponentFixture<Degisken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Degisken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Degisken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
