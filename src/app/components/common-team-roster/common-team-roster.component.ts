import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../core/models/Team';

@Component({
  selector: 'app-common-team-roster',
  templateUrl: './common-team-roster.component.html',
  styleUrls: ['./common-team-roster.component.scss']
})
export class CommonTeamRosterComponent implements OnInit, OnChanges {
  @Input() team: Team;
  dataUrl = 'https://stats.nba.com/stats/commonTeamYears/?LeagueID=00';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData(this.dataUrl);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.team = changes.team.currentValue;
  }

  getData(dataUrl) {
    this.http.get(dataUrl).subscribe(res => {
      // console.log(res);
    });
  }
}
