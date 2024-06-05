import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-push-poll',
  standalone: true,
  imports: [],
  styleUrl: './push-poll.component.css',
  template: `
    <p>
      {{ counter() }}
    </p>
    <button (click)="increaseCounter()">Increase counter</button>

  `
})
export class PushPollComponent {
  counter = signal(0);

  constructor() {
    effect(() => {
      // First click value: 3, Second click value: 6, 
      // Third click value: 9 and so on
      console.log(this.counter()); 

      /**
       * This effect is called only after 
       * the increaseCounter() finishes its execution.
       * 
       * It won't trigger for every update, only after the last one.
       * 
       * Why? To save resources.
       * 
       * Why trigger a change detection cycle and update
       * the template if the value won't be seen by the user?
       */
    });
  }
  increaseCounter() {
    this.counter.update(val => val + 1);
    this.counter.update(val => val + 1);
    this.counter.update(val => val + 1);
  }
}
