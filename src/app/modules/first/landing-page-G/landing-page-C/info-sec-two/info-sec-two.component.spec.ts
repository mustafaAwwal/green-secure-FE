import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecTwoComponent } from './info-sec-two.component';

describe('InfoSecTwoComponent', () => {
  let component: InfoSecTwoComponent;
  let fixture: ComponentFixture<InfoSecTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
