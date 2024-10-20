import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewCardComponent } from './blog-preview-card.component';

describe('BlogPreviewCardComponent', () => {
  let component: BlogPreviewCardComponent;
  let fixture: ComponentFixture<BlogPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPreviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
