import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpcbackupComponent } from './fpcbackup.component';

describe('FpcbackupComponent', () => {
  let component: FpcbackupComponent;
  let fixture: ComponentFixture<FpcbackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpcbackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpcbackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
