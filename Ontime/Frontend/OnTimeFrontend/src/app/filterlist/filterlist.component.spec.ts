import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterlistComponent } from './filterlist.component';

describe('FilterlistComponent', () => {
  let component: FilterlistComponent;
  let fixture: ComponentFixture<FilterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
