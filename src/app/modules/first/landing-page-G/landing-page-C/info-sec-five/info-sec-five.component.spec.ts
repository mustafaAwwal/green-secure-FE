import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecFiveComponent } from './info-sec-five.component';

describe('InfoSecFiveComponent', () => {
  let component: InfoSecFiveComponent;
  let fixture: ComponentFixture<InfoSecFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
