import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashoardPage } from './admin-dashoard.page';

describe('AdminDashoardPage', () => {
  let component: AdminDashoardPage;
  let fixture: ComponentFixture<AdminDashoardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDashoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
