import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoistingComponent } from './hoisting.component';

describe('HoistingComponent', () => {
  let component: HoistingComponent;
  let fixture: ComponentFixture<HoistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
