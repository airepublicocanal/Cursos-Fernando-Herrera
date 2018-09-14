import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer35Component } from './footer35.component';

describe('Footer35Component', () => {
  let component: Footer35Component;
  let fixture: ComponentFixture<Footer35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
