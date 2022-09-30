import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressCardComponent } from './actress-card.component';

describe('ActressCardComponent', () => {
  let component: ActressCardComponent;
  let fixture: ComponentFixture<ActressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
