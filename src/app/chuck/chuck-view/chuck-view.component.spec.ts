import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckViewComponent } from './chuck-view.component';

describe('ChuckViewComponent', () => {
  let component: ChuckViewComponent;
  let fixture: ComponentFixture<ChuckViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
