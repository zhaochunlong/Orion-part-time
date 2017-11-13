import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIntentionComponent } from './user-intention.component';

describe('UserIntentionComponent', () => {
  let component: UserIntentionComponent;
  let fixture: ComponentFixture<UserIntentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIntentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
