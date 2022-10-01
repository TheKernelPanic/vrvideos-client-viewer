import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryClickableComponent } from './image-gallery-clickable.component';

describe('ImageGalleryClickableComponent', () => {
  let component: ImageGalleryClickableComponent;
  let fixture: ComponentFixture<ImageGalleryClickableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryClickableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleryClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
