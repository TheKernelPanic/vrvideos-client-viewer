import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCriteriaSelectorComponent } from './list-criteria-selector.component';

describe('ListCriteriaSelectorComponent', () => {
  let component: ListCriteriaSelectorComponent;
  let fixture: ComponentFixture<ListCriteriaSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCriteriaSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCriteriaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
