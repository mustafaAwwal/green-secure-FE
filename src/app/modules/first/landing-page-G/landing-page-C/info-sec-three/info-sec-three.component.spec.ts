import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecThreeComponent } from './info-sec-three.component';

describe('InfoSecThreeComponent', () => {
  let component: InfoSecThreeComponent;
  let fixture: ComponentFixture<InfoSecThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
