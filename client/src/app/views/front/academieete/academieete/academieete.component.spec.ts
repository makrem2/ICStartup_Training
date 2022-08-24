import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademieeteComponent } from './academieete.component';

describe('AcademieeteComponent', () => {
  let component: AcademieeteComponent;
  let fixture: ComponentFixture<AcademieeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademieeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademieeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
