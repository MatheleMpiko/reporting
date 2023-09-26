import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAwarenessPage } from './user-awareness.page';

describe('UserAwarenessPage', () => {
  let component: UserAwarenessPage;
  let fixture: ComponentFixture<UserAwarenessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserAwarenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
