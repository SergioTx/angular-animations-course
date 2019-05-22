import { Component } from '@angular/core';
import { showStateTrigger, animateStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [showStateTrigger, animateStateTrigger]
})
export class AppComponent {
  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  onAddElement() {
    this.testResults.push(Math.random());
  }
}
