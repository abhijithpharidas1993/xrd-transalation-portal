import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransalationListComponent } from './transalation-list.component';

describe('TransalationListComponent', () => {
  let component: TransalationListComponent;
  let fixture: ComponentFixture<TransalationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransalationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransalationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
