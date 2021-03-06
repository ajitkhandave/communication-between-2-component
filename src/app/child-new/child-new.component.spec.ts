/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildNewComponent } from './child-new.component';

describe('ChildNewComponent', () => {
  let component: ChildNewComponent;
  let fixture: ComponentFixture<ChildNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
