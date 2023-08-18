import { Component, OnInit } from '@angular/core';

class Player {
  id: number;
  name: string;
  heightFeet: number;
  heightInches: number
  skillLevel: number;
  totalInches: number;
  constructor(id: number, name: string, heightFeet: number, heightInches: number, skillLevel: number) {
    this.id = id;
    this.name = name;
    this.heightFeet = heightFeet;
    this.heightInches = heightInches;
    this.skillLevel = skillLevel;
    this.totalInches = 0;
  }
}

@Component({
  selector: 'app-ultimate-teammates',
  templateUrl: './ultimate-teammates.component.html',
  styleUrls: ['./ultimate-teammates.component.css']
})
export class UltimateTeammatesComponent implements OnInit {
  showPlayerForm = false;
  showTeamResults = false;
  numberOfPlayers = 0;
  players: Player[] = [];
  teamA: Player[] = [];
  teamB: Player[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  enterKeySubmit(e: KeyboardEvent, callback: Function) {
    if (callback && e.key === 'Enter') {
      callback.call(this);
    }
  }

  numberOfPlayersEntered() {
    let i = 0;
    while (i < this.numberOfPlayers) {
      this.players.push(new Player(i, '', 0, 0, 0))
      i++;
    }
    this.showPlayerForm = true;
  }

  get heightValidator() {
    return /^(3-7)'(?:\s*(?:1[01]|0-9)(''|"))?$/;
  }

  calculateTeams() {
    // convert heightFeet and heightInches to one inches variable
    // sort by height, then by skill level
    // create two team arrays
    // alternate each player pushed into each team array
    const allPlayers = this.players.map((p: Player) => {
      p.totalInches = p.heightInches;
      p.totalInches += p.heightFeet * 12
      return p;
    });
    allPlayers.sort((a, b) => b.totalInches - a.totalInches);
    allPlayers.sort((a, b) => b.skillLevel - a.skillLevel);

    this.teamA = allPlayers.filter((player, i) => i % 2 === 0);
    this.teamB = allPlayers.filter((player, i) => i % 2 !== 0);

    this.showPlayerForm = false;
    this.showTeamResults = true;
  }

  startOver() {
    this.showPlayerForm = false;
    this.showTeamResults = false;
    this.numberOfPlayers = 0;
    this.players = [];
    this.teamA = [];
    this.teamB = [];
  }
}
