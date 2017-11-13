import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDetailComponent } from './spy-detail.component';

describe('SpyDetailComponent', () => {
  let component: SpyDetailComponent;
  let fixture: ComponentFixture<SpyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
