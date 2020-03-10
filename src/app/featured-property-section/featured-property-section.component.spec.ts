import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertySectionComponent } from './featured-property-section.component';

describe('FeaturedPropertySectionComponent', () => {
  let component: FeaturedPropertySectionComponent;
  let fixture: ComponentFixture<FeaturedPropertySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPropertySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPropertySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
