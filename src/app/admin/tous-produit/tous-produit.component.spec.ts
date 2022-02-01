import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousProduitComponent } from './tous-produit.component';

describe('TousProduitComponent', () => {
  let component: TousProduitComponent;
  let fixture: ComponentFixture<TousProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
