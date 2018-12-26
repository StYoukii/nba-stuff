import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../../core/models/Team';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  homeTeam: Team;
  visitorTeam: Team;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.homeTeam = new Team(params['homeTeamId']);
      this.visitorTeam = new Team(params['visitorTeamId']);
    });
  }
}
