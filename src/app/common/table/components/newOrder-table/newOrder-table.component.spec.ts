import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderTableComponent } from './newOrder-table.component';

describe('TableComponent', () => {
  let component: NewOrderTableComponent;
  let fixture: ComponentFixture<NewOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
