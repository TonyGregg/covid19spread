import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSpreadComponent } from './stop-spread.component';

describe('StopSpreadComponent', () => {
  let component: StopSpreadComponent;
  let fixture: ComponentFixture<StopSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
