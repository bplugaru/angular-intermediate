import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckDynamicComponent } from './chuck-dynamic.component';

describe('ChuckDynamicComponent', () => {
  let component: ChuckDynamicComponent;
  let fixture: ComponentFixture<ChuckDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
