import { trigger, state, style, transition, animate } from "@angular/animations";

export const markedTrigger = trigger('markedTrigger', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
  })),
  transition('default <=> marked', animate('300ms ease-out')),
]);
