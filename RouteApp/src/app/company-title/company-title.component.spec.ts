import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTitleComponent } from './company-title.component';

describe('CompanyTitleComponent', () => {
  let component: CompanyTitleComponent;
  let fixture: ComponentFixture<CompanyTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
