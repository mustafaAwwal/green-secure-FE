import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecOneComponent } from './info-sec-one.component';

describe('InfoSecOneComponent', () => {
  let component: InfoSecOneComponent;
  let fixture: ComponentFixture<InfoSecOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
