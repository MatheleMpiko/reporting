import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextReportsPage } from './text-reports.page';

describe('TextReportsPage', () => {
  let component: TextReportsPage;
  let fixture: ComponentFixture<TextReportsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TextReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
