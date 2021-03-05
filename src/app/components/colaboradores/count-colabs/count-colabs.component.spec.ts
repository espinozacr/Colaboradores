import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountColabsComponent } from './count-colabs.component';

describe('CountColabsComponent', () => {
  let component: CountColabsComponent;
  let fixture: ComponentFixture<CountColabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountColabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountColabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
