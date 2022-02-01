import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConatctComponent } from './modifier-conatct.component';

describe('ModifierConatctComponent', () => {
  let component: ModifierConatctComponent;
  let fixture: ComponentFixture<ModifierConatctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierConatctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierConatctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
