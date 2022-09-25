import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrVideoCardComponent } from './vr-video-card.component';

describe('VrVideoCardComponent', () => {
  let component: VrVideoCardComponent;
  let fixture: ComponentFixture<VrVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrVideoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
