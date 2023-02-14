import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStoryComponent } from './company-story.component';

describe('CompanyStoryComponent', () => {
  let component: CompanyStoryComponent;
  let fixture: ComponentFixture<CompanyStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
