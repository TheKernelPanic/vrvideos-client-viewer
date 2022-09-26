import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperViewComponent } from './wrapper-view.component';

describe('WrapperViewComponent', () => {
  let component: WrapperViewComponent;
  let fixture: ComponentFixture<WrapperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
