import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosmagasinComponent } from './nosmagasin.component';

describe('NosmagasinComponent', () => {
  let component: NosmagasinComponent;
  let fixture: ComponentFixture<NosmagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosmagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosmagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
