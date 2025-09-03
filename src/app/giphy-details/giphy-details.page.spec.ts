import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiphyDetailsPage } from './giphy-details.page';

describe('GiphyDetailsPage', () => {
  let component: GiphyDetailsPage;
  let fixture: ComponentFixture<GiphyDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
