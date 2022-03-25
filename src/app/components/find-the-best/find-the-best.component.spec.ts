import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheBestComponent } from './find-the-best.component';

describe('FindTheBestComponent', () => {
  let component: FindTheBestComponent;
  let fixture: ComponentFixture<FindTheBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTheBestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTheBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
