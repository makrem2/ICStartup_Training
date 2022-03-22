import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBlogsComponent } from './gestion-blogs.component';

describe('GestionBlogsComponent', () => {
  let component: GestionBlogsComponent;
  let fixture: ComponentFixture<GestionBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
