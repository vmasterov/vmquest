import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestTwoComponent } from './for-test-two.component';

describe('ForTestTwoComponent', () => {
  let component: ForTestTwoComponent;
  let fixture: ComponentFixture<ForTestTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
