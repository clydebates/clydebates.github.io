import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface Player {
  id: number;
  name: string;
  height: string;
  skillLevel: number;
}

@Component({
  selector: 'app-ultimate-teammates',
  templateUrl: './ultimate-teammates.component.html',
  styleUrls: ['./ultimate-teammates.component.css']
})
export class UltimateTeammatesComponent implements OnInit {
  showNumberPicker = true;
  numberOfPlayers = 0;
  playerForm: FormGroup;

  get players() {
    const players = <FormArray>this.playerForm.get('players');
    return players.controls
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.playerForm = this.formBuilder.group({
      players: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.playerForm.value.numberOfPlayers)
  }

  numberOfPlayersEntered() {
    let i = 0;
    while (i < this.numberOfPlayers) {
      this.players.push(this.formBuilder.group({id: i, name: '', height: '', skillLevel: 0}))
      i++;
    }
    this.showNumberPicker = false;
  }

  calculateTeams() {
    console.log(this.playerForm);
    debugger;
  }
}
