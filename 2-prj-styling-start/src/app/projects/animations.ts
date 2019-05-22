import { trigger, state, style } from "@angular/animations";

export const markedTrigger = trigger('markedTrigger', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
  })),
]);
