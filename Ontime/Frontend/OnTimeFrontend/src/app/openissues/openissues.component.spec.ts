import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenissuesComponent } from './openissues.component';

describe('OpenissuesComponent', () => {
  let component: OpenissuesComponent;
  let fixture: ComponentFixture<OpenissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
