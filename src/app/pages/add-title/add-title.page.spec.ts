import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitlePage } from './add-title.page';

describe('AddTitlePage', () => {
  let component: AddTitlePage;
  let fixture: ComponentFixture<AddTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
