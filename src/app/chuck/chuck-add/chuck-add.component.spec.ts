import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckAddComponent } from './chuck-add.component';

describe('ChuckAddComponent', () => {
  let component: ChuckAddComponent;
  let fixture: ComponentFixture<ChuckAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
