import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotSignsPage } from './spot-signs.page';

describe('SpotSignsPage', () => {
  let component: SpotSignsPage;
  let fixture: ComponentFixture<SpotSignsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpotSignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
