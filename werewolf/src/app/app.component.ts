import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerName = '';
  playerNameInput = '';

  joinGame() {
    console.log(this.playerNameInput);
    this.playerName = this.playerNameInput;
  }
}
