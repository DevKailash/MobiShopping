import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecoutComponent } from './checout.component';

describe('ChecoutComponent', () => {
  let component: ChecoutComponent;
  let fixture: ComponentFixture<ChecoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
