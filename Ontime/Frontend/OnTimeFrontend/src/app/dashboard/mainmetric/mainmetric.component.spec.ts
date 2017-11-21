import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmetricComponent } from './mainmetric.component';

describe('MainmetricComponent', () => {
  let component: MainmetricComponent;
  let fixture: ComponentFixture<MainmetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
