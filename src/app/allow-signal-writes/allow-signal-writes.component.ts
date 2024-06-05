import { Component, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-allow-signal-writes',
  standalone: true,
  imports: [],
  template: `
  `,
  styleUrl: './allow-signal-writes.component.css'
})

/**
 * allowSignalWrites: true 
 * this option allows you to write to signals in an effect
 */
export class AllowSignalWritesComponent {

  counter = signal(0);
  alphabet = signal('a');

  constructor() {
    effect(() => {
       // this signal will be tracked for changes
      console.log(this.counter());

      // this leads to an infinite loop as 
      // the effect is called for each update
      this.counter.update(val => val + 1); 

      // only update the value of signals 
      // which are not tracked for changes
      this.alphabet.set('abc');
    }, {
      // be careful when using this option
      allowSignalWrites: true 
    });
  }
}
