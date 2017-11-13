import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndAuditComponent } from './end-audit.component';

describe('EndAuditComponent', () => {
  let component: EndAuditComponent;
  let fixture: ComponentFixture<EndAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
