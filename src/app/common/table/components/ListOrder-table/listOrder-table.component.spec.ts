import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderTableComponent } from './listOrder-table.component';

describe('TableComponent', () => {
  let component: ListOrderTableComponent;
  let fixture: ComponentFixture<ListOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
