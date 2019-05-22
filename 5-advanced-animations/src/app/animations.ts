import { state, trigger, style, transition, animate } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  state('notShown', style({

  })),
  state('shown', style({

  })),
  transition('notShown => shown', [
    style({
      opacity: 0,
    }),
    animate(300, style({
      opacity: 1,
    })),
  ]),
]);
