import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsComponent } from './gestion-inscriptions.component';

describe('GestionInscriptionsComponent', () => {
  let component: GestionInscriptionsComponent;
  let fixture: ComponentFixture<GestionInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
