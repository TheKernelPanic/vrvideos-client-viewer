import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteVrVideoInputComponent } from './autocomplete-vr-video-input.component';

describe('AutocompleteVrVideoInputComponent', () => {
  let component: AutocompleteVrVideoInputComponent;
  let fixture: ComponentFixture<AutocompleteVrVideoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteVrVideoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteVrVideoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
