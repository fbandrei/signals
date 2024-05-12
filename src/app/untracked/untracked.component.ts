import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked',
  standalone: true,
  imports: [],
  templateUrl: './untracked.component.html',
  styleUrl: './untracked.component.css'
})
export class UntrackedComponent {

  counter = signal(0); // counter = signal(1);

  constructor() {
    effect(() => {
      console.log('counter:', this.counter());
      this.doubleCounter();
    }, { allowSignalWrites: true });
  }

  doubleCounter() {
    this.counter.update((value) =>  value * 2);
  }
}
