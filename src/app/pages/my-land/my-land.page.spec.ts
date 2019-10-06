import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLandPage } from './my-land.page';

describe('MyLandPage', () => {
  let component: MyLandPage;
  let fixture: ComponentFixture<MyLandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
