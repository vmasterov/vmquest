import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestOneComponent } from './for-test-one.component';

describe('ForTestOneComponent', () => {
  let component: ForTestOneComponent;
  let fixture: ComponentFixture<ForTestOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
