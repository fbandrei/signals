import { Component, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-immutable',
  standalone: true,
  imports: [],
  styleUrl: './immutable.component.css',
  template: `
    <button (click)="setCounter()">Set counter</button>
  `
})
/**
 * The effect will only be triggered once
 * Even if the value is set multiple times
 * Until the counter is set to a different value than 1
 */
export class ImmutableComponent implements OnInit {
  counter = signal(0);

  constructor() {
    effect(() => {
      // Displays 1 only once
      console.log(this.counter()); 
    });
  }

  ngOnInit() {
    this.setCounter();
    this.setCounter();
    this.setCounter();
  }

  setCounter() {
    this.counter.set(1);
  }
}
