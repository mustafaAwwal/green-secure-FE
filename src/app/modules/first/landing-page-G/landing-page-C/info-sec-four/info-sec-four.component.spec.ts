import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSecFourComponent } from './info-sec-four.component';

describe('InfoSecFourComponent', () => {
  let component: InfoSecFourComponent;
  let fixture: ComponentFixture<InfoSecFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSecFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSecFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
