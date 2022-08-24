import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourssoirComponent } from './courssoir.component';

describe('CourssoirComponent', () => {
  let component: CourssoirComponent;
  let fixture: ComponentFixture<CourssoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourssoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourssoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
