import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParallaxComponent } from './hero-parallax.component';

describe('HeroParallaxComponent', () => {
  let component: HeroParallaxComponent;
  let fixture: ComponentFixture<HeroParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
