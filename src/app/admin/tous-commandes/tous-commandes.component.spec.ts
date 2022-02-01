import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousCommandesComponent } from './tous-commandes.component';

describe('TousCommandesComponent', () => {
  let component: TousCommandesComponent;
  let fixture: ComponentFixture<TousCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
