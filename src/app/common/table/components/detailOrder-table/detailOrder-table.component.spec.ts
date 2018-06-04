import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderTableComponent } from './detailOrder-table.component';

describe('TableComponent', () => {
  let component: DetailOrderTableComponent;
  let fixture: ComponentFixture<DetailOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
