import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecSixComponent } from './info-sec-six.component';

describe('InfoSecSixComponent', () => {
  let component: InfoSecSixComponent;
  let fixture: ComponentFixture<InfoSecSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
