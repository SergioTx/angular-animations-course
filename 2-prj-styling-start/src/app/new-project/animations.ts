import { trigger, state, style, transition, group, animate, query } from "@angular/animations";

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    color: 'green',
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'darkred',
    color: 'white',
  })),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)',
      })),
      animate(200, style({
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        color: 'green',
      })),
    ]),
    animate(200, style({
      transform: 'scale(1)',
    })),
  ]),
  transition('valid => invalid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)',
      })),
      animate(200, style({
        backgroundColor: 'red',
        borderColor: 'darkred',
        color: 'white',
      })),
    ]),
    animate(200, style({
      transform: 'scale(1)',
    })),
  ]),
]);

export const formStateTrigger = trigger('formState', [
  transition('* => *', [
    query('input.ng-invalid:focus', [
      animate(200, style({
        backgroundColor: 'red',
      })),
      animate(200),
    ], { optional: true }),
  ])
]);
