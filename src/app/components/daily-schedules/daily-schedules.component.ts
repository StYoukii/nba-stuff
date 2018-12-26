import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../../core/models/Game';
import { Team } from '../../core/models/Team';

@Component({
  selector: 'app-daily-schedules',
  templateUrl: './daily-schedules.component.html',
  styleUrls: ['./daily-schedules.component.scss']
})
export class DailySchedulesComponent implements OnInit {
  dailyGame = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDailyGames();
  }

  getDailyGames() {
    const gameDate = new Date().toISOString().split('T')[0];
    const dataUrl = 'https://stats.nba.com/stats/scoreboard/?GameDate=' + gameDate + '&LeagueID=00&DayOffset=0';

    this.http.get(dataUrl).subscribe(res => {
      for (const row of res.resultSets[0].rowSet) {
        const gameId = row[2].toString();
        const homeTeam = new Team(row[6].toString());
        const visitorTeam = new Team(row[7].toString());

        const game = new Game(gameId, homeTeam, visitorTeam);

        this.dailyGame.push(game);
      }
    });
  }
}
