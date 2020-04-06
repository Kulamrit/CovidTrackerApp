import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcountryComponent } from './selectcountry.component';

describe('SelectcountryComponent', () => {
  let component: SelectcountryComponent;
  let fixture: ComponentFixture<SelectcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
