import { Team } from './Team';

export class Game {
  gameId: string;
  homeTeam: Team;
  visitorTeam: Team;

  constructor(gameId, homeTeam, visitorTeam) {
    this.gameId = gameId;
    this.homeTeam = homeTeam;
    this.visitorTeam = visitorTeam;
  }
}
