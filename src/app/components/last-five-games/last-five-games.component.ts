import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../core/globals';

import { Team } from '../../core/models/Team';

class TeamGameLog {
  gameDate: string;
  gameId: string;
  winLoose: string;
}

@Component({
  selector: 'app-last-five-games',
  templateUrl: './last-five-games.component.html',
  styleUrls: ['./last-five-games.component.scss']
})
export class LastFiveGamesComponent implements OnInit, OnChanges {
  @Input() team: Team;

  teamGameLogs = [];

  constructor(private http: HttpClient, private globals: Globals) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.teamGameLogs = [];

    const dataUrlTeamGameLog = 'https://stats.nba.com/stats/teamgamelog/' +
      '?TeamID=' + this.team.teamId +
      '&Season=' + this.globals.SEASON +
      '&SeasonType=' + this.globals.SEASON_TYPE;

    this.http.get(dataUrlTeamGameLog).subscribe(res => {
      for (const i = 0; i < 5; i++) {
        // console.log(res.resultSets[0]);

        const teamGameLog = new TeamGameLog();
        teamGameLog.gameId = res.resultSets[0].rowSet[i][1];
        teamGameLog.gameDate = res.resultSets[0].rowSet[i][2];
        teamGameLog.winLoose = res.resultSets[0].rowSet[i][4];

        this.teamGameLogs.push(teamGameLog);
      }

      for (const teamGameLog of this.teamGameLogs) {
        console.log(teamGameLog);

        // const dataUrlBoxscoresummaryv2 = 'https://stats.nba.com/stats/teamgamelog/';
      }
    });
  }

}
