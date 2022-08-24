import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeCoursesComponent } from './part-time-courses.component';

describe('PartTimeCoursesComponent', () => {
  let component: PartTimeCoursesComponent;
  let fixture: ComponentFixture<PartTimeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTimeCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
