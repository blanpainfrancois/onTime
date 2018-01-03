import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedemployeesComponent } from './subscribedemployees.component';

describe('SubscribedemployeesComponent', () => {
  let component: SubscribedemployeesComponent;
  let fixture: ComponentFixture<SubscribedemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
