import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePropertyCardComponent } from './feature-property-card.component';

describe('FeaturePropertyCardComponent', () => {
  let component: FeaturePropertyCardComponent;
  let fixture: ComponentFixture<FeaturePropertyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePropertyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
