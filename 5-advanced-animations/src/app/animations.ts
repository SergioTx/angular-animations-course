import { state, trigger, style, transition, animate } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0,
  //   }),
  //   animate(300),
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0,
  // }))),
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition(':leave', animate(300, style({
    opacity: 0,
  }))),
]);