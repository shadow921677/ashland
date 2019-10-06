import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransactionPage } from './make-transaction.page';

describe('MakeTransactionPage', () => {
  let component: MakeTransactionPage;
  let fixture: ComponentFixture<MakeTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
