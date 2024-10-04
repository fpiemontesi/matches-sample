import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchReportsComponent } from './match-reports.component';

describe('MatchReportsComponent', () => {
  let component: MatchReportsComponent;
  let fixture: ComponentFixture<MatchReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
