import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPlacesCardComponent } from './trending-places-card.component';

describe('TrendingPlacesCardComponent', () => {
  let component: TrendingPlacesCardComponent;
  let fixture: ComponentFixture<TrendingPlacesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingPlacesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPlacesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
