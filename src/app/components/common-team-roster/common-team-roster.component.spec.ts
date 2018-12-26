import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTeamRosterComponent } from './common-team-roster.component';

describe('CommonTeamRosterComponent', () => {
  let component: CommonTeamRosterComponent;
  let fixture: ComponentFixture<CommonTeamRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTeamRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTeamRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
