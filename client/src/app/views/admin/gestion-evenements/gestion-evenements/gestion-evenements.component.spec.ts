import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEvenementsComponent } from './gestion-evenements.component';

describe('GestionEvenementsComponent', () => {
  let component: GestionEvenementsComponent;
  let fixture: ComponentFixture<GestionEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEvenementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
