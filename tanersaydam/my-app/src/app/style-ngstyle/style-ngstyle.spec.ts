import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleNgstyle } from './style-ngstyle';

describe('StyleNgstyle', () => {
  let component: StyleNgstyle;
  let fixture: ComponentFixture<StyleNgstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleNgstyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleNgstyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
