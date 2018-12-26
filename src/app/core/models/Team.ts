const teams = require('../../../assets/json/teams.json');

export class Team {
  teamId: string;
  teamName: string;
  teamAbbreviation: string;
  teamLogoPath: string;

  constructor(teamId) {
    this.teamId = teamId.toString();
    this.teamName = this.getNameFromId();
    this.teamAbbreviation = this.getAbbreviationFromId();
    this.teamLogoPath = '/assets/img/logos/' + this.teamId + '.svg';
  }

  getNameFromId() {
    let teamName = 'Team name not found';

    for (const team of teams) {
      if (this.teamId === team.teamId.toString()) {
        teamName = team.teamName;
      }
    }

    return teamName;
  }

  getAbbreviationFromId() {
    let teamAbbreviation = 'Team name not found';

    for (const team of teams) {
      if (this.teamId === team.teamId.toString()) {
        teamAbbreviation = team.abbreviation;
      }
    }

    return teamAbbreviation;
  }
}
