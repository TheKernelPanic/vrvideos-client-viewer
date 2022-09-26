import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressSelectorComponent } from './actress-selector.component';

describe('ActressSelectorComponent', () => {
  let component: ActressSelectorComponent;
  let fixture: ComponentFixture<ActressSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActressSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
