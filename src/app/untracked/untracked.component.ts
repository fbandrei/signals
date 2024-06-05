import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked',
  standalone: true,
  imports: [],
  styleUrl: './untracked.component.css',
  template: `
  <button (click)="updateCounterOne()">Update Counter 1</button>
  <button (click)="updateCounterTwo()">Update Counter 2</button>
  `
})
/**
 * Untracked function allows to read the signal value 
 * without making it a dependency of the effect function.
 */
export class UntrackedComponent {
  counterOne = signal(0);
  counterTwo = signal(0);

  constructor() {
    effect(() => {
      console.log(`Counter 1: ${this.counterOne()}`);
      untracked(() => {
        console.log(`Counter 2: ${this.counterTwo()}`);
      });
    })
  };

  updateCounterOne() {
    // Triggers the effect
    this.counterOne.update(val => val + 1); 
  }

  updateCounterTwo() {
    // Doesn't trigger the effect
    this.counterTwo.update(val => val + 1);
  }
}
