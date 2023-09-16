import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportedItemPage } from './reported-item.page';

describe('ReportedItemPage', () => {
  let component: ReportedItemPage;
  let fixture: ComponentFixture<ReportedItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReportedItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
