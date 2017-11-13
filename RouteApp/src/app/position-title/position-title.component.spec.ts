import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTitleComponent } from './position-title.component';

describe('PositionTitleComponent', () => {
  let component: PositionTitleComponent;
  let fixture: ComponentFixture<PositionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
