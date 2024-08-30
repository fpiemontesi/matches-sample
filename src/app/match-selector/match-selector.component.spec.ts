import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSelectorComponent } from './match-selector.component';

describe('MatchSelectorComponent', () => {
  let component: MatchSelectorComponent;
  let fixture: ComponentFixture<MatchSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
