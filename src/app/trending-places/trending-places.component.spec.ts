import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPlacesComponent } from './trending-places.component';

describe('TrendingPlacesComponent', () => {
  let component: TrendingPlacesComponent;
  let fixture: ComponentFixture<TrendingPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
