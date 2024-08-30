import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesViewComponent } from './matches-view.component';

describe('MatchesViewComponent', () => {
  let component: MatchesViewComponent;
  let fixture: ComponentFixture<MatchesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
