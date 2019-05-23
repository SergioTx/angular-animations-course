import { Component } from '@angular/core';
import { animate, style, transition, trigger, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        }),
        animate(300),
        query('.panel-heading', [
          style({
            transform: 'translateY(-300px)',
            opacity: 0,
          }),
          animate(300),
        ]),
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
