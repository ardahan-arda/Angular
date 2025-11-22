import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNgclass } from './class-ngclass';

describe('ClassNgclass', () => {
  let component: ClassNgclass;
  let fixture: ComponentFixture<ClassNgclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassNgclass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassNgclass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
