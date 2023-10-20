import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfTheDayComponent } from './details-of-the-day.component';

describe('DetailsOfTheDayComponent', () => {
  let component: DetailsOfTheDayComponent;
  let fixture: ComponentFixture<DetailsOfTheDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOfTheDayComponent]
    });
    fixture = TestBed.createComponent(DetailsOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
