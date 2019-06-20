import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckEditComponent } from './chuck-edit.component';

describe('ChuckEditComponent', () => {
  let component: ChuckEditComponent;
  let fixture: ComponentFixture<ChuckEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
